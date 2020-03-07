function positiveSum(arr) {
  console.log(arr)
  let cass = 0;
  for ( i=0;i<arr.length;i++){
    if(arr[i] >0){
    cass += arr[i];
    }
    }
return cass
}


console.log('sample answer for March 2nd is: ' + ' ' + '' + positiveSum([1,2,3]));
