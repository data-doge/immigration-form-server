module.exports = {
  name: 'g-325-beneficiary',
  sourcePath: './pdf-data/g-325-beneficiary.pdf',
  cipher: {
    beneficiary_first_name: 'form1[0].#subform[0].FirstName[0]',
    beneficiary_middle_name: 'form1[0].#subform[0].MiddleName[0]',
    beneficiary_last_name: 'form1[0].#subform[0].FamilyName[0]',
    beneficiary_fathers_family_name: 'form1[0].#subform[0].Father_FamilyName[0]'
  }
}
