var pdfFiller = require('pdffiller')
var each = require('lodash.foreach')

var i485Data = {
  sourcePath: './i-485-jane-blank.pdf',
  destinationPath: './i-485-jane-auto-populated.pdf',
  cipher: {
    first_name: 'form1[0].#subform[0].GivenNameFirstName[0]',
    middle_name: 'form1[0].#subform[0].MiddleName[0]',
    last_name: 'form1[0].#subform[0].FamilyNameLastName[0]'
  }
}

var g325Data = {
  sourcePath: './g-325-jane-beneficiary-blank.pdf',
  destinationPath: './g-325-jane-beneficiary-auto-populated.pdf',
  cipher: {
    first_name: 'form1[0].#subform[0].FirstName[0]',
    middle_name: 'form1[0].#subform[0].MiddleName[0]',
    last_name: 'form1[0].#subform[0].FamilyName[0]'
  }
}

var pdfDataArray = [i485Data, g325Data]

function populatePDFs (commonFieldData) {
  pdfDataArray.forEach(function (pdfData) {
    var customFieldData = {}
    each(pdfData.cipher, function (specificFieldName, commonFieldName) {
      customFieldData[specificFieldName] = commonFieldData[commonFieldName]
    })

    pdfFiller.fillForm(pdfData.sourcePath, pdfData.destinationPath, customFieldData, function (err) {
      if (err) throw err
      console.log(pdfData.destinationPath + ' created ~~')
    })
  })
}



module.exports = populatePDFs
