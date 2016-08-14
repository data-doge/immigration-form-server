module.exports = {
  name: 'i-765-foreign-born-national',
  sourcePath: './pdf-data/i-765-foreign-born-national.pdf',
  conversionMapFrom: function (commonFieldData) {
    return {
      'form1[0].#subform[0].alien_re_number[0]': commonFieldData.foreign_born_national_i_94_number // TODO: make this a conditional, can also be alien registration number
    }
  }
}
