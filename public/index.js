var $ = require('jquery')
var request = require('request')
var toObject = require('form-to-object')
var download = require('downloadjs')
var config = require('./../config')[process.env.NODE_ENV]
require('html5-simple-date-input-polyfill')
var _ = require('lodash')
var clone = require('lodash.clone')

$('#client-form').submit(function (e) {
  e.preventDefault()
  $('#loading-screen').show()
  var unformattedData = toObject(this)
  var formattedData = reformatData(unformattedData)
  request.post({
    url: config.baseUrl + '/process',
    body: formattedData,
    json: true,
    encoding: null
  }, function (err, res, body) {
    $('#loading-screen').hide()
    if (err) throw err
    var blob = new Blob([res.body], {type: 'octet/stream'})
    // todo: maybe change this
    e.target.reset()

    download(blob, 'immigration-forms__' + Date.now() + '.zip', 'application/zip')
  })
})


function reformatData (unformattedData) {
  var formattedData = _.clone(unformattedData)
  var birthdate = makeBirthdateFrom(unformattedData)
  formattedData.foreign_born_national_birth_date = birthdate
  return formattedData
}

function makeBirthdateFrom (unformattedData) {
    var temp = unformattedData.foreign_born_national_birth_date
    var year = temp.slice(0,4)
    var month = temp.slice(5,7)
    var day = temp.slice(8,10)
    var birthdate = month + "/" + day +  "/" + year
    return birthdate
  }