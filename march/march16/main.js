function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((a,b) => a+b,0)
  let sum2 = arr2.reduce((a,b) => a+b,0)
  return sum1+sum2
}
console.log('sample answer for March 16th is: ' + ' ' + '' + arrayPlusArray([2,3,4],[2,4,4]));
