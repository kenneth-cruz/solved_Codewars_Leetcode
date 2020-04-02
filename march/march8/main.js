function mergeArrays(a, b) {
  console.log(a, 'array a')
  console.log(b, 'array b')
  let newArray = [];
  let smallLength = Math.min(a.length, b.length)
  console.log(smallLength, 'smallest length of both arrays')
  for(i=0; i < smallLength; i++) {
    newArray.push(a[i], b[i])
  }
  let extraA = (a.splice(smallLength))
  let what = newArray.concat(extraA)
  let extraB = (b.splice(smallLength))
  let what2 = what.concat(extraB)
  return(what2)
}

// March 8th
// Merge two arrays
// Level 7!
