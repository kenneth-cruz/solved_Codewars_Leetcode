function index(array, n){
  console.log(array)
  console.log(n)
  let finder = array[n]
  let powerProduct = Math.pow(finder, n)
  /// important part: if the TYPE of the item at that array index is undefined, the do this:
  if (typeof finder == 'undefined'){
  return -1 ;
  }
  else{
  return powerProduct;
  }
}


console.log('sample answer is' + ' ' +index([1,2,3],2));
