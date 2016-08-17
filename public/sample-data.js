var faker = require('faker')
var sample = require('lodash.sample')
var randomLetter = require('random-letter')
var moment = require('moment')

module.exports = {
  'foreign_born_national_last_name': faker.name.lastName(),
  'foreign_born_national_first_name': faker.name.firstName(),
  'foreign_born_national_middle_name': randomLetter().toUpperCase() + '.',
  'shared_us_mailing_address_street_number_and_name': faker.address.streetAddress(),
  'shared_us_mailing_address_apt_number': faker.address.secondaryAddress(),
  'shared_us_mailing_address_town_or_city': faker.address.city(),
  'shared_us_mailing_address_state': faker.address.stateAbbr(),
  'shared_us_mailing_address_zip_code': faker.address.zipCode(),
  'foreign_born_national_country_of_citizenship_or_nationality': faker.address.country(),
  'foreign_born_national_place_of_birth_town_or_city': faker.address.city(),
  'foreign_born_national_place_of_birth_country': faker.address.country(),
  'foreign_born_national_date_of_birth': moment(faker.date.past()).format('MM/DD/YYYY'),
  'foreign_born_national_ssn': 'XXX-XXX-XXXX',
  'foreign_born_national_alien_registration_number': 'A-XXXXXXX',
  'foreign_born_national_date_of_last_entry_into_us': moment(faker.date.past()).format('MM/DD/YYYY'),
  'foreign_born_national_status_at_last_entry': sample(['B-2 Visitor', 'F-1 Student', 'No Lawful Status']),
  'foreign_born_national_current_immigration_status': sample(['Visitor', 'Student']),
  'foreign_born_national_fathers_first_name': faker.name.firstName(),
  'foreign_born_national_mothers_first_name': faker.name.firstName(),
  'us_citizen_last_name': faker.name.lastName(),
  'us_citizen_first_name': faker.name.firstName(),
  'us_citizen_middle_name': randomLetter().toUpperCase() + '.',
  'us_citizen_date_of_birth': moment(faker.date.past()).format('MM/DD/YYYY'),
  'us_citizen_place_of_birth_town_or_city': faker.address.city(),
  'us_citizen_place_of_birth_country': faker.address.country(),
  'foreign_born_national_date_authorized_stay_expired': moment(faker.date.past()).format('MM/DD/YYYY')
}
