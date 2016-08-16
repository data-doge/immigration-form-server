module.exports = {
  name: 'g-325-foreign-born-national',
  sourcePath: './pdf-data/g-325-foreign-born-national.pdf',
  conversionMapFrom: function (commonFieldData) {
    return {
      'form1[0].#subform[0].FamilyName[0]': commonFieldData.foreign_born_national_last_name,
      'form1[0].#subform[0].FirstName[0]': commonFieldData.foreign_born_national_first_name,
      'form1[0].#subform[0].MiddleName[0]': commonFieldData.foreign_born_national_middle_name,
      'form1[0].#subform[0].DateofBirth[0]': commonFieldData.foreign_born_national_date_of_birth,
      'form1[0].#subform[0].Citizenship_or_Nationality[0]': commonFieldData.foreign_born_national_country_of_citizenship_or_nationality,
      'form1[0].#subform[0].City_and_CountryofBirth[0]': commonFieldData.foreign_born_national_place_of_birth_town_or_city + ', ' + commonFieldData.foreign_born_national_place_of_birth_country,
      'form1[0].#subform[0].SSN1[0]': commonFieldData.foreign_born_national_ssn,
      'form1[0].#subform[0].Father_FamilyName[0]': commonFieldData.foreign_born_national_last_name,
      'form1[0].#subform[0].Father_FirstName[0]': commonFieldData.foreign_born_national_fathers_first_name,
      'form1[0].#subform[0].Mother_FirstName[0]': commonFieldData.foreign_born_national_mothers_first_name,
      'form1[0].#subform[0].Spouse_FamilyName[0]': commonFieldData.us_citizen_last_name,
      'form1[0].#subform[0].Spouse_FirstName[0]': commonFieldData.us_citizen_first_name,
      'form1[0].#subform[0].Spouse_DateofBirth[0]': commonFieldData.us_citizen_date_of_birth,
      'form1[0].#subform[0].Souse_CityandCountry_of_Birth[0]': commonFieldData.us_citizen_place_of_birth_town_or_city + ', ' + commonFieldData.us_citizen_place_of_birth_country,
      'form1[0].#subform[0].Table1[0].Row1[0].StreetandNumber[0]': commonFieldData.shared_us_mailing_address_street_number_and_name + ', ' + commonFieldData.shared_us_mailing_address_apt_number,
      'form1[0].#subform[0].Table1[0].Row1[0].City[0]': commonFieldData.shared_us_mailing_address_town_or_city,
      'form1[0].#subform[0].Table1[0].Row1[0].ProvinceorState[0]': commonFieldData.shared_us_mailing_address_state
    }
  }
}
