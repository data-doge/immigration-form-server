module.exports = {
  name: 'g-325-us-citizen',
  sourcePath: './pdf-data/g-325-us-citizen.pdf',
  cipher: {
    us_citizen_first_name: 'form1[0].#subform[0].FirstName[0]',
    us_citizen_middle_name: 'form1[0].#subform[0].MiddleName[0]',
    us_citizen_last_name: 'form1[0].#subform[0].FamilyName[0]',
    us_citizen_fathers_family_name: 'form1[0].#subform[0].Father_FamilyName[0]',
    us_citizen_ssn: 'form1[0].#subform[0].SSN1[0]'
  }
}
