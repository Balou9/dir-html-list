# dir-html-list

[![build status](http://img.shields.io/travis/Balou9/dir-html-list.svg?style=flat)](https://travis-ci.org/Balou9/dir-html-list) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/Balou9/dir-html-list?branch=master&svg=true)](https://ci.appveyor.com/project/Balou9/dir-html-list)

Get html file names in desired directory

# Usage

This one looks for html files in current directory

      var dirHtmlList = require('dir-html-list')

      dirHtmlList(process.cwd(), function (err, data) {
        if (err) throw err
        console.log(data)
      })

## License

[MIT](./license.md)
