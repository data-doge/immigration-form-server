module.exports = {
  name: 'g-325-us-citizen',
  sourcePath: './pdf-data/g-325-us-citizen.pdf',
  conversionMapFrom: function (commonFieldData) {
    return {
      'form1[0].#subform[0].FirstName[0]': commonFieldData.us_citizen_first_name,
      'form1[0].#subform[0].MiddleName[0]': commonFieldData.us_citizen_middle_name,
      'form1[0].#subform[0].FamilyName[0]': commonFieldData.us_citizen_last_name,
      'form1[0].#subform[0].SSN1[0]': commonFieldData.us_citizen_ssn
    }
  }
}
