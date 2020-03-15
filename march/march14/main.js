function capitalize(s){
  let deStringedBigSmall = s.split("")
  let deStringedSmallBig = s.split("")
  let emptyArray =[]
    for(i=0;i<deStringedBigSmall.length;i++){
    if(i === 0 || i % 2 === 0){
      deStringedBigSmall[i] = deStringedBigSmall[i].toUpperCase()
      }
    if(i % 2 !== 0){
      deStringedSmallBig[i] = deStringedSmallBig[i].toUpperCase()
      }
    }
  let bigSmall = deStringedBigSmall.toString().replace(/,/g, '')
  let smallBig = deStringedSmallBig.toString().replace(/,/g, '')
  return [bigSmall, smallBig]
};

console.log('sample answer for March 14th is: ' + ' ' + '' + capitalize("abcdef"));
