module.exports = {
  name: 'i-130-us-citizen',
  sourcePath: './pdf-data/i-130-us-citizen.pdf',
  conversionMapFrom: function (commonFieldData) {
    return {
      'F[0].#subform[0].TextField1[1]': commonFieldData.us_citizen_first_name,
      'F[0].#subform[0].TextField1[2]': commonFieldData.us_citizen_middle_name,
      'F[0].#subform[0].TextField1[0]': commonFieldData.us_citizen_last_name,
      'F[0].#subform[0].TextField1[0]': commonFieldData.us_citizen_last_name,
      'F[0].#subform[0].TextField1[1]': commonFieldData.us_citizen_first_name,
      'F[0].#subform[0].TextField1[6]': commonFieldData.shared_us_mailing_address_street_number_and_name,
      'F[0].#subform[0].TextField1[7]': commonFieldData.shared_us_mailing_address_apt_number,
      'F[0].#subform[0].TextField1[10]': commonFieldData.shared_us_mailing_address_town_or_city,
      'F[0].#subform[0].TextField1[11]': commonFieldData.shared_us_mailing_address_state,
      'F[0].#subform[0].TextField1[12]': commonFieldData.shared_us_mailing_address_zip_code,
      'F[0].#subform[0].Date_of_Birth[0]': commonFieldData.us_citizen_date_of_birth,
      'F[0].#subform[0].TextField1[4]': commonFieldData.foreign_born_national_first_name,
      'F[0].#subform[0].TextField1[5]': commonFieldData.foreign_born_national_middle_name,
      'F[0].#subform[0].TextField1[3]': commonFieldData.foreign_born_national_last_name,
      'F[0].#subform[0].TextField1[9]': commonFieldData.shared_us_mailing_address_street_number_and_name,
      'F[0].#subform[0].TextField1[8]': commonFieldData.shared_us_mailing_address_apt_number,
      'F[0].#subform[0].TextField1[13]': commonFieldData.shared_us_mailing_address_town_or_city,
      'F[0].#subform[0].TextField1[14]': commonFieldData.shared_us_mailing_address_state,
      'F[0].#subform[0].TextField1[15]': commonFieldData.shared_us_mailing_address_zip_code,
      'F[0].#subform[0].Date_of_Birth[1]': commonFieldData.foreign_born_national_birth_date,
      'F[0].#subform[0].TextField1[18]': commonFieldData.foreign_born_national_place_of_birth_town_or_city,
      'F[0].#subform[0].TextField1[19]': commonFieldData.foreign_born_national_place_of_birth_country,
      'F[0].#subform[0].SSN[1]': commonFieldData.foreign_born_national_ssn,
      'F[0].#subform[0].SSN[3]': commonFieldData.foreign_born_national_alien_registration_number,
      'F[0].#subform[0].TextField1[32]': commonFieldData.foreign_born_national_status_at_last_entry,
      'F[0].#subform[0].Date_of_Birth[8]': commonFieldData.foreign_born_national_date_of_last_entry_into_us,
      'F[0].#subform[0].Date_of_Birth[9]': commonFieldData.foreign_born_national_date_authorized_stay_expired,
      'F[0].#subform[1].TextField1[34]': (
        commonFieldData.foreign_born_national_first_name + ' ' +
        commonFieldData.foreign_born_national_middle_name + ' ' +
        commonFieldData.foreign_born_national_last_name + ' '
      ),
      'F[0].#subform[1].TextField1[35]': 'Spouse',
      'F[0].#subform[1].Date_of_Birth[12]': commonFieldData.foreign_born_national_date_of_birth, // todo: Are we sure this is the FBN field?
      'F[0].#subform[1].TextField1[36]': commonFieldData.foreign_born_national_place_of_birth_country
    }
  }
}
