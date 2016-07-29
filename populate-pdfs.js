var pdfFiller = require('pdffiller')
var each = require('lodash.foreach')
var pdfDataArray = require('./pdf-data')
var shortid = require('shortid')
var Q = require('q')

function populatePDF (pdfData, commonFieldData) {
  var customFieldData = {}
  each(pdfData.cipher, function (fieldNameInPDF, commonFieldName) {
    customFieldData[fieldNameInPDF] = commonFieldData[commonFieldName]
  })

  var deferred = Q.defer()
  var filePath = pdfData.name + '__' + shortid.generate() + '.pdf'

  pdfFiller.fillForm(pdfData.sourcePath, filePath, customFieldData, function (err) {
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
