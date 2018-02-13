var tape = require('tape')
var dirHtmlList = require('./index.js')

tape('Output is an', function (t) {
  t.true(dirHtmlList, 'array', 'is an array')
  t.end()
})
