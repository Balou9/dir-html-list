var tape = require('tape')
var dirHtmlList = require('./index.js')

tape('Output is an array', function (t) {
  dirHtmlList(process.cwd(), function (err, data) {
    if (err) t.end(err)
    t.ok(Array.isArray(data), 'is true')
    t.end()
  })
})

tape('Output gives error', function (t) {
  dirHtmlList('1234', function (err, data) {
    t.ok(err, 'is coming')
    t.end()
  })
})

tape('Output only gives html', function (t) {
  dirHtmlList(process.cwd(), function (err, data) {
    if (err) t.end(err)
    var truth = data.every(function (current) {
      return /html$/.test(current)
    })
    t.ok(truth, 'is true')
    t.end()
  })
})
