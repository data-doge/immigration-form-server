## some context

apparently 'change of status of immigration' (i think thats what its called) is a process involving two people, a petitioner and a beneficiary, and four forms.

these four forms can be found in `./example-pdfs`

```bash
example-pdfs
├── completed-g-325a-beneficiary-data-field-dump.txt
├── completed-g-325a-beneficiary.pdf
├── completed-g-325a-petitioner-data-field-dump.txt
├── completed-g-325a-petitioner.pdf
├── completed-i-130-petitioner-data-field-dump.txt
├── completed-i-130-petitioner.pdf
├── completed-i-485-beneficiary-data-field-dump.txt
└── completed-i-485-beneficiary.pdf
```

there's a lot of redundant information in these four forms and it's a waste of time to fill the same shit over and over again.

there was expressed interest from a person at court square law project in having a magical form, with all unique fields, that a lawyer could fill out, and on submission, it'd autopopulate all four forms and download them as PDF.

that's the aim of this project. and the approach to the problem is described below

## the approach

in `./public/index.html` there's a form with some of these unique fields

```html
<form id="client-form">
  <h2><em>k so u got ur beneficiary shit</em></h2>
  <input class="form-field" type="text" name="beneficiary_first_name" placeholder="Given Name (First Name)" />
  <input class="form-field" type="text" name="beneficiary_middle_name" placeholder="Middle Name" />
  <input class="form-field" type="text" name="beneficiary_last_name" placeholder="Family Name (Last Name)" />
  <input class="form-field" type="text" name="beneficiary_i_94_number" placeholder="I-94 Arrival-Departure Record Number" />
  <input class="form-field" type="text" name="beneficiary_fathers_family_name" placeholder="Father's Family Name" />

  <h2><em>and then also ur petitioner shit</em></h2>
  <input class="form-field" type="text" name="petitioner_first_name" placeholder="Given Name (First Name)" />
  <input class="form-field" type="text" name="petitioner_middle_name" placeholder="Middle Name" />
  <input class="form-field" type="text" name="petitioner_last_name" placeholder="Family Name (Last Name)" />
  <input class="form-field" type="text" name="petitioner_ssn" placeholder="Social Security Number (if any)" />
  <input class="form-field" type="text" name="petitioner_fathers_family_name" placeholder="Father's Family Name" />

  <input class="form-field" type="submit" value="OK" id="submit-btn">
</form>
```

on form submit, the `name`s and `value`s for each input are serialized into an object and sent along with a `POST /process` request to an `express` server

```js
// ./public/index.js

var $ = require('jquery')
var request = require('request')
var toObject = require('form-to-object')
// ...
var config = require('./../config')[process.env.NODE_ENV]

$('#client-form').submit(function (e) {
  e.preventDefault()
  $('#loading-screen').show()
  var data = toObject(this)
  request.post({
    url: config.baseUrl + '/process',
    body: data,
    json: true,
    encoding: null
  }, function (err, res, body) {
    // ...
  })
})
```

that server takes said object, and passes it to `populatePDFs`, which autopopulates some copies of the PDFs. when autopopulation is complete, it zips those files and returns them to the client. finally, it removes those copies from the server.

```js
// ./server.js

var express = require('express')
var zip = require('express-zip')
var bodyParser = require('body-parser')
var cors = require('cors')
var populatePDFs = require('./populate-pdfs.js')
var fs = require('fs')

var server = express()
server.use(bodyParser.json())
server.use(cors())
server.use(express.static('public'));

server.post('/process', function (req, res) {
  var fieldData = req.body

  populatePDFs(fieldData).then(function (filePaths) {
    var files = filePaths.map(function (filePath) {
      return {path: filePath, name: filePath}
    })

    res.zip(files, function () {
      filePaths.forEach(fs.unlinkSync)
    })
  })
})

server.listen(process.env.PORT || 3000)
```

back on the client-side, the zip file is downloaded, and the form is cleared.

```js
// ./public/index.js

var $ = require('jquery')
var request = require('request')
var download = require('downloadjs')
// ...

$('#client-form').submit(function (e) {
  // ...
  request.post({
    // ...
  }, function (err, res, body) {
    $('#loading-screen').hide()
    if (err) throw err
    var blob = new Blob([res.body], {type: 'octet/stream'})
    e.target.reset()
    download(blob, 'immigration-forms__' + Date.now() + '.zip', 'application/zip')
  })
})
```

---

the interesting stuff happens in that `populatePDFs` fxn, defined in `./populate-pdfs.js`. autopopulation relies on a nice node module called [pdffiller](https://www.npmjs.com/package/pdffiller), and a collection of mappings between our 'common' field names, and the really fucked up and inconsistent field names in these PDF forms.

```js
// ./populate-pdfs.js

var pdfFiller = require('pdffiller')
var each = require('lodash.foreach')
var pdfDataArray = require('./pdf-data')
var shortid = require('shortid')
var Q = require('q')

function populatePDF (pdfData, commonFieldData) {
  var fieldDataForPDF = {}

  each(pdfData.cipher, function (fieldNameInPDF, commonFieldName) {
    fieldDataForPDF[fieldNameInPDF] = commonFieldData[commonFieldName]
  })

  var deferred = Q.defer()
  var filePath = pdfData.name + '__' + shortid.generate() + '.pdf'

  pdfFiller.fillForm(pdfData.sourcePath, filePath, fieldDataForPDF, function (err) {
    if (err) throw err
    deferred.resolve(filePath)
  })

  return deferred.promise
}

function populatePDFs (commonFieldData) {
  var promises = pdfDataArray.map(function (pdfData) {
    return populatePDF(pdfData, commonFieldData)
  })
  return Q.all(promises)
}

module.exports = populatePDFs
```

these mappings can be found in `./pdf-data`

```bash
pdf-data
├── g-325-beneficiary-data.js
├── g-325-beneficiary.pdf
├── g-325-petitioner-data.js
├── g-325-petitioner.pdf
├── i-130-petitioner-data.js
├── i-130-petitioner.pdf
├── i-485-beneficiary-data.js
├── i-485-beneficiary.pdf
└── index.js
```

here's an example of one mapping. the commented line is something i can talk about in person.

here, `cipher` is an object, where the `key`s are our 'common' names, and the `value`s are our fucked up PDF field names.

```js
// i-130-petitioner-data.js

module.exports = {
  name: 'i-130-petitioner',
  sourcePath: './pdf-data/i-130-petitioner.pdf',
  cipher: {
    petitioner_first_name: 'F[0].#subform[0].TextField1[1]',
    petitioner_middle_name: 'F[0].#subform[0].TextField1[2]',
    petitioner_last_name: 'F[0].#subform[0].TextField1[0]',
    petitioner_ssn: 'F[0].#subform[0].SSN[0]',
    beneficiary_first_name: 'F[0].#subform[0].TextField1[4]',
    beneficiary_middle_name: 'F[0].#subform[0].TextField1[5]',
    beneficiary_last_name: 'F[0].#subform[0].TextField1[3]'
    // beneficiary_i_94_number: '' holy shit lol so fucked
  }
}
```

those fucked up PDF field names can be found in `./example-pdfs`, in the files post-fixed with `-data-field-dump.txt`

```bash
example-pdfs
├── completed-g-325a-beneficiary-data-field-dump.txt
├── completed-g-325a-beneficiary.pdf
├── completed-g-325a-petitioner-data-field-dump.txt
├── completed-g-325a-petitioner.pdf
├── completed-i-130-petitioner-data-field-dump.txt
├── completed-i-130-petitioner.pdf
├── completed-i-485-beneficiary-data-field-dump.txt
└── completed-i-485-beneficiary.pdf
```

these files are the result of running

```bash
pdftk <PDF FILE> dump_data_fields output <OUTPUT FILE>
```

and appear to be some sort of markup language for PDFs.

---

so yep. at this point, it seems like we need to:

1. identify all common fields
2. create `<input>`s for them
3. find their fucked up field names in the pdf `-data-field-dump.txt` files
4. create mappings between the common field names and the fucked up PDF field names in the `-data.js` files in `./pdf-data`
5. deal with any weird shit that comes up unexpectedly.
