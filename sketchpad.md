## sketchpad

```js

module.exports = {
  name: '',
  sourcePath: '',
  mappings: [
    {
      operation: 'single-replacement',
      commonFieldName: '',
      PDFFieldName: ''
    },
    {
      operation: 'poly-replacement',
      commonFieldName: '',
      PDFFieldNames: [
        '',
        ...
      ]
    },
    {
      operation: 'concat-single-replacement',
      template: '<commonFieldName1>, <commonFieldName2>',
      PDFFieldName: ''
    },
    {
      operation: 'concat-poly-replacement',
      template: '<commonFieldName1>, <commonFieldName2>',
      PDFFieldName: [
        '',
        ...
      ]
    },

  ]

```
