module.exports = {
  name: 'i-485-beneficiary',
  sourcePath: './pdf-data/i-485-beneficiary.pdf',
  cipher: {
    beneficiary_first_name: 'form1[0].#subform[0].GivenNameFirstName[0]',
    beneficiary_middle_name: 'form1[0].#subform[0].MiddleName[0]',
    beneficiary_last_name: 'form1[0].#subform[0].FamilyNameLastName[0]',
    beneficiary_i_94_number: 'form1[0].#subform[0].I-94Number[0]'
  }
}
