const arrayOfSums=[];
const finalFinalArray=[];
function resistance(arr){
  let numOfMiniArrays = arr.length
  console.log(arr)
  for(i=0;i<arr.length;i++){
      let sumMini = arr[i].reduce(function(a,b){
        return a +b;
      }, 0);
    arrayOfSums.push(sumMini)
//     arrayOfSums.push(sumMini)
  }
    let finalArray = arrayOfSums.slice(-arr.length)
    console.log(finalArray);
    for (j=0;j<finalArray.length;j++){
      finalFinalArray.push(1/finalArray[j])
    }
    let finalFinalArraySliced = finalFinalArray.slice(-arr.length)
    console.log(finalFinalArraySliced)
    let finalFinalArraySum = finalFinalArraySliced.reduce(function(a,b){
        return a +b;
      }, 0);
      let finalResult = 1/finalFinalArraySum
      let finalResultRounded = parseFloat(finalResult.toFixed(2))
      return finalResultRounded
}

console.log('sample answer for March 8th is: ' + ' ' + '' + resistance([[1],[2]]));
