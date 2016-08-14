module.exports = {
  name: 'i-485-foreign-born-national',
  sourcePath: './pdf-data/i-485-foreign-born-national.pdf',
  cipher: {
    foreign_born_national_first_name: 'form1[0].#subform[0].GivenNameFirstName[0]',
    foreign_born_national_middle_name: 'form1[0].#subform[0].MiddleName[0]',
    foreign_born_national_last_name: 'form1[0].#subform[0].FamilyNameLastName[0]',
    foreign_born_national_i_94_number: 'form1[0].#subform[0].I-94Number[0]',
    foreign_born_national_birth_date: 'form1[0].#subform[0].DateofBirth[0]'
  }
}
