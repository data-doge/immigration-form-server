## dev-log

started building a little express server. i'm now trying to fill out just one field on the PDF via a form on a separate static website, and return that pdf over an express server, and download it on the client-side

first step was figuring out how to get the field names of the PDF file, as this is what pdfFiller requires in order to make changes

the pdf was password protected lol. so i used an online service to decrypt it. amazing how easy it was to do.

i'm looking at the fields for the first page of the application for naturalization form, and aloooot of them don't have alt-text, so i think alot of the form naming will have to

the form types i see so far are:
  - button --> checkbox
  - choice --> select
  - text --> input

for the future, since this application seems to be divided into parts, we'll want to add some control flow to the web interface

---

so the goal will be to:
  - decrypt the four forms
  - create a cipher between the FDF field names and the 'common' names -- common, being the names that are shared across documents
  - have a field and explanation for each of the 'common' names on the client-interface
  - fill everything out, press submit
  - makes request to the server with a flat JSON object containing all field names and their associated values
  - on server-side, fill out all PDF forms ()


so the ciphers will look like:

```js
// from client-interface
var common = {
  "first_name" : "eugene",
  "middle_name" : "james",
  "last_name" : "lynch"
}

// for each form
var form_1_specific = {
  "first_name": "form1[0].#subform[0].Line2_GivenName[0]",
  "middle_name": "form1[0].#subform[0].Line2_MiddleName[0]",
  "last_name": "form1[0].#subform[0].Line2_FamilyName[0]"
}

var form_2_specific = {
  "first_name": "form1[0].#subform[0].Line2_GivenName[0]",
  "middle_name": "form1[0].#subform[0].Line2_MiddleName[0]",
  "last_name": "form1[0].#subform[0].Line2_FamilyName[0]"
}
```

a good hello world:

- two forms with name fields
- first, middle, last name on client interface
- fill both forms, return buffer for both, convert to PDFs and download on client side
