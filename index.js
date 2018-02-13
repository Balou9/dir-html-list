var fs = require('fs')
var path = require('path')
var dir = path.dirname('')

function htmlCheck(file) {
  return /html$/.test(file)
}

function dirHtmlList(dir, callback){
  fs.readdir(dir, function(err, files){
    if (err) return console.error(err)
    return files.filter(htmlCheck)
  })
  if (callback.error) return callback
}

module.exports = dirHtmlList
