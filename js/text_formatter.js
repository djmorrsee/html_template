var _stripDiv = function (buffer) {
  return buffer.replace(/<\/div>$/, '')
}

var StripHTML = function (buffer) {

  // Remove Leading Div (fixes off by one with the split)

  buffer = buffer.replace(/<div><\/div>/g, '')
  buffer = buffer.replace(/^<div>/, '')

  // Split At Divs
  buffer = buffer.split('<div>').map(function (line, index){
    return _stripDiv(line).replace(/<br>/g, '')
  })

  var stripped = buffer.join('\n')
  return stripped
}

var _embedBreaks = function (buffer) {
}
var EmbedHTML = function (buffer) {
  var lines = buffer.split('\n')
  // console.log(lines);
  buffer = buffer.split('\n').map (function (line, index) {
    if (line === '')
      line = '<br>'
    return '<div>' + line + '</div>'
  }).join('');
  return buffer
}
