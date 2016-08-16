module.exports = {
  name: 'i-130-us-citizen',
  sourcePath: './pdf-data/i-130-us-citizen.pdf',
  conversionMapFrom: function (commonFieldData) {
    return {
      'F[0].#subform[0].TextField1[1]': commonFieldData.us_citizen_first_name,
      'F[0].#subform[0].TextField1[2]': commonFieldData.us_citizen_middle_name,
      'F[0].#subform[0].TextField1[0]': commonFieldData.us_citizen_last_name,
      'F[0].#subform[0].TextField1[4]': commonFieldData.foreign_born_national_first_name,
      'F[0].#subform[0].TextField1[5]': commonFieldData.foreign_born_national_middle_name,
      'F[0].#subform[0].TextField1[3]': commonFieldData.foreign_born_national_last_name,
      'F[0].#subform[0].Date_of_Birth[1]': commonFieldData.foreign_born_national_birth_date
    }
  }
}
