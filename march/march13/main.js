function menFromBoys(arr){
let evenArray = []
let combinedArray =[]
let evenSort = []
let oddSort = []
let oddArray = []
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
    evenArray.push(arr[i])
    }
    else{
    oddArray.push(arr[i])
    }
  }
  evenSort = evenArray.sort( (a, b) => a - b );
  oddSort = oddArray.sort((a, b) => b - a);
  combinedArray = evenSort.concat(oddSort);
  let unique = [...new Set(combinedArray)]
  return unique

}


console.log('sample answer for March 13th is: ' + ' ' + '' + menFromBoys([1,2,8,6,7,9,13]));
