function firstNonConsecutive(arr) {
  len = arr.length;
  for (let i=0; i<len-1; i++) {

    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i + 1];
    }
    // important part to keep outside of the curly
  }return null;
}

console.log( 'test question feb26 answer:' + ' '+ firstNonConsecutive([1,3,4]))
