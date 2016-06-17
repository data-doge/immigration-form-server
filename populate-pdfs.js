var pdfFiller = require('pdffiller')
var each = require('lodash.foreach')
var pdfDataArray = require('./pdf-data')

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
