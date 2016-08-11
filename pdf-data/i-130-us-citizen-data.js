module.exports = {
  name: 'i-130-us-citizen',
  sourcePath: './pdf-data/i-130-us-citizen.pdf',
  cipher: {
    us_citizen_first_name: 'F[0].#subform[0].TextField1[1]',
    us_citizen_middle_name: 'F[0].#subform[0].TextField1[2]',
    us_citizen_last_name: 'F[0].#subform[0].TextField1[0]',
    us_citizen_ssn: 'F[0].#subform[0].SSN[0]',
    foreign_born_national_first_name: 'F[0].#subform[0].TextField1[4]',
    foreign_born_national_middle_name: 'F[0].#subform[0].TextField1[5]',
    foreign_born_national_last_name: 'F[0].#subform[0].TextField1[3]'
    // foreign_born_national_i_94_number: '' holy shit lol so fucked
  }
}
