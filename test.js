var populatePDFs = require('./populate-pdfs.js')

var fieldData = {
  first_name : 'Jane',
  middle_name : 'Lorem',
  last_name : 'Doe',
  i_94_number : '654-98765432',
  fathers_family_name: 'Rose'   
}

populatePDFs(fieldData)
