

function findLongest(str) {

  var spl = str.split(" ");
  var longest = 0

  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest
}

console.log('sample answer for March 4th is: ' + ' ' + '' + findLongest('hello my name is ken'));
