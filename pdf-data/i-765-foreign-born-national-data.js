var just = require('string-just')

module.exports = {
  name: 'i-765-foreign-born-national',
  sourcePath: './pdf-data/i-765-foreign-born-national.pdf',
  conversionMapFrom: function (commonFieldData) {
    return {
      'form1[0].#subform[0].Line1_FamilyName[0]': (
        just.ljust(commonFieldData.foreign_born_national_last_name.substring(0,18), 19) +
        just.ljust(commonFieldData.foreign_born_national_first_name.substring(0,14), 15) +
        commonFieldData.foreign_born_national_first_name.substring(0,10)
      ).toUpperCase(),
      'form1[0].#subform[0].Line3_StreetNumberName[0]': commonFieldData.shared_us_mailing_address_street_number_and_name,
      'form1[0].#subform[0].apt_number[0]': commonFieldData.shared_us_mailing_address_apt_number,
      'form1[0].#subform[0].Line3_CityOrTown[0]': commonFieldData.shared_us_mailing_address_town_or_city,
      'form1[0].#subform[0].Line3_State[0]': commonFieldData.shared_us_mailing_address_state,
      'form1[0].#subform[0].Line3_ZipCode[0]': commonFieldData.shared_us_mailing_address_zip_code,
      'form1[0].#subform[0].county_of_citizenship[0]': commonFieldData.foreign_born_national_country_of_citizenship_or_nationality,
      'form1[0].#subform[0].place_of_birth[0]': (
        just.ljust(commonFieldData.foreign_born_national_place_of_birth_town_or_city.substring(0,21), 22) +
        '             ' +
        commonFieldData.foreign_born_national_place_of_birth_country
      ),
      'form1[0].#subform[0].Date_of_Birth[0]': commonFieldData.foreign_born_national_date_of_birth,
      'form1[0].#subform[0].ssn_s[0]': commonFieldData.foreign_born_national_ssn,
      'form1[0].#subform[0].alien_re_number[0]': (
        commonFieldData.foreign_born_national_alien_registration_number || commonFieldData.foreign_born_national_i_94_number
      ),
      'form1[0].#subform[0].Date_of_last_entry[0]': commonFieldData.foreign_born_national_date_of_last_entry_into_us,
      'form1[0].#subform[0].manner[0]': commonFieldData.foreign_born_national_status_at_last_entry,
      'form1[0].#subform[0].status[0]': commonFieldData.foreign_born_national_current_immigration_status
    }
  }
}
