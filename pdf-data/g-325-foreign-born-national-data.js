module.exports = {
  name: 'g-325-foreign-born-national',
  sourcePath: './pdf-data/g-325-foreign-born-national.pdf',
  conversionMapFrom: function (commonFieldData) {
    return {
      'form1[0].#subform[0].FirstName[0]': commonFieldData.foreign_born_national_first_name,
      'form1[0].#subform[0].MiddleName[0]': commonFieldData.foreign_born_national_middle_name,
      'form1[0].#subform[0].FamilyName[0]': commonFieldData.foreign_born_national_last_name,
      'form1[0].#subform[0].Father_FamilyName[0]': commonFieldData.foreign_born_national_fathers_family_name
    }
  }
}
