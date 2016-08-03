module.exports = {
  name: 'i-130-petitioner',
  sourcePath: './pdf-data/i-130-petitioner.pdf',
  cipher: {
    petitioner_first_name: 'F[0].#subform[0].TextField1[1]',
    petitioner_middle_name: 'F[0].#subform[0].TextField1[2]',
    petitioner_last_name: 'F[0].#subform[0].TextField1[0]',
    petitioner_ssn: 'F[0].#subform[0].SSN[0]',
    foreign_born_national_first_name: 'F[0].#subform[0].TextField1[4]',
    foreign_born_national_middle_name: 'F[0].#subform[0].TextField1[5]',
    foreign_born_national_last_name: 'F[0].#subform[0].TextField1[3]'
    // foreign_born_national_i_94_number: '' holy shit lol so fucked
  }
}
