module.exports = {
  name: 'g-325-foreign-born-national',
  sourcePath: './pdf-data/g-325-foreign-born-national.pdf',
  cipher: {
    foreign_born_national_first_name: 'form1[0].#subform[0].FirstName[0]',
    foreign_born_national_middle_name: 'form1[0].#subform[0].MiddleName[0]',
    foreign_born_national_last_name: 'form1[0].#subform[0].FamilyName[0]',
    foreign_born_national_fathers_family_name: 'form1[0].#subform[0].Father_FamilyName[0]',
    foreign_born_national_birth_date: 'form1[0].#subform[0].DateofBirth[0]'
  }
}
