module.exports = {
  name: 'i-765-foreign-born-national',
  sourcePath: './pdf-data/i-765-foreign-born-national.pdf',
  cipher: {
    // foreign_born_national_first_name: '', // depression
    // foreign_born_national_middle_name: '', // depression
    // foreign_born_national_last_name: '', // depression
    foreign_born_national_i_94_number: 'form1[0].#subform[0].alien_re_number[0]' // TODO: make this a conditional, can also be alien registration number
  }
}
