var fs = require('fs')
var path = require('path')

function htmlCheck(file) {
  return /html$/.test(file)
}
/*
  dir: String
    directory to scan
  callback: Function
    signature: callback(err, data)
*/
function dirHtmlList (dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err)
    callback(null, files.filter(htmlCheck))
  })
}

module.exports = dirHtmlList
