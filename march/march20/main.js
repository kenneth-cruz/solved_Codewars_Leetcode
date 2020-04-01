function findShort(s){
  let sentenceChopped = s.split(' ')
  let lengthArray=[];
  console.log(sentenceChopped)
    for(i=0;i<sentenceChopped.length;i++){
        lengthArray.push(sentenceChopped[i].length)
      }
      console.log(lengthArray)
      lengthArray.sort(function(a,b){return a-b})
      console.log(lengthArray)
      return lengthArray[0]
}

// March 20th
// Level 7: Shortest Word
