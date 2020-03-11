function getCount(str) {
  var vowelsCount = 0;

  let splitter = str.split('', str.length)
  let counter = 0
  for (i=0;i<splitter.length; i++){
    if(splitter[i] === 'a' || splitter[i] === 'e' || splitter[i] === 'i' || splitter[i] === 'o' || splitter[i] === 'u'){
    counter++
    }
    else{counter+=0}

  }

  return counter
}

console.log('sample answer for March 9th is: ' + ' ' + '' + getCount('hello'));
