module.exports = {
  sourcePath: './pdf-data/blank-pdfs/g-325-jane-beneficiary-blank.pdf',
  destinationPath: './auto-populated-pdfs/g-325-jane-beneficiary-auto-populated.pdf',
  cipher: {
    first_name: 'form1[0].#subform[0].FirstName[0]',
    middle_name: 'form1[0].#subform[0].MiddleName[0]',
    last_name: 'form1[0].#subform[0].FamilyName[0]'
  }
}
