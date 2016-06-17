module.exports = {
  sourcePath: './pdf-data/blank-pdfs/i-485-jane-blank.pdf',
  destinationPath: './auto-populated-pdfs/i-485-jane-auto-populated.pdf',
  cipher: {
    first_name: 'form1[0].#subform[0].GivenNameFirstName[0]',
    middle_name: 'form1[0].#subform[0].MiddleName[0]',
    last_name: 'form1[0].#subform[0].FamilyNameLastName[0]',
    i_94_number: 'form1[0].#subform[0].I-94Number[0]'
  }
}
