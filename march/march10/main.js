function maxRot(n) {
  let string = String(n)
  const resultArray = [string]

  for (let index = 0; index < string.length; index++) {
    string = `${string.slice(0, index)}${string.slice(index + 1)}${string[index]}`
    resultArray.push(string)
  }
  // highest number in that array ...
  return Math.max(...resultArray)
}

console.log('sample answer for March 10th is: ' + ' ' + '' + maxRot(`12345`));
