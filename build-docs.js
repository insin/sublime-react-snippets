'use strict';

var fs = require('fs')

var glob = require('glob')
var trim = require('trim')
var xml2js = require('xml2js')

var README = fs.readFileSync('./README.md').toString()
var snippets = glob.sync('./snippets/*.sublime-snippet')

var parser = new xml2js.Parser({async: false})

var snippets = glob.sync('./snippets/*.sublime-snippet').map(function(file) {
  var snippet
  parser.parseString(fs.readFileSync(file), function(err, result) {
    snippet = result.snippet
  })
  snippet.content = trim(snippet.content[0]).replace(/\t/g, '  ')
  snippet.description = snippet.description[0]
  snippet.tabTrigger = snippet.tabTrigger[0]
  snippet.scope = snippet.scope[0]
  return snippet
})

snippets.sort(function(a, b) {
  return a.tabTrigger < b.tabTrigger ? -1 : 1
})

var docs = snippets.map(function(snippet) {
  return (
    '#### ' + snippet.tabTrigger +
    ' -- ' + snippet.description.replace(/^React: /, '') + '\n\n' +
    '```javascript\n' +
    snippet.content +
    '\n```'
  )
}).join('\n\n')

var startMarker = '### Snippets\n'
var endMarker = '\n### MIT Licensed'
var startIndex = README.indexOf(startMarker) + startMarker.length
var endIndex = README.indexOf(endMarker)

README = README.slice(0, startIndex) + '\n' + docs + '\n' + README.slice(endIndex)

fs.writeFileSync('README.md', README)