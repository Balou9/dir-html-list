var recursive = require('recursive-readdir')
var fs = require('fs')
var path = require('path')

var dir = path.dirname('C:\\Users\\Emmanuel.Owosekun\\gitrepos\\*')
var ext = '.html'
var list = []

// fs.readdir and then array.filter
// (error, callback) rein if callback.error
// return callback

function htmlFilter (files) {
  files.forEach(function(data){
    if (path.extname(data) === ext) {
      console.log(data)
    }
  })
}

function htmlList () {
  recursive(dir, function (err, files) {
    if (err) return console.error(err)
    console.log(htmlFilter(files))
  })
}

console.log(htmlList())

module.export = htmlList

// Make it modular above
// We still need a function which
