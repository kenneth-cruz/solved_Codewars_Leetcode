function convertBase20ToDecimal(init){
  let parser = parseInt(init, 20)
  if(isNaN(parser)){return -1}
  else{ return( parser) };
}

console.log('sample answer for March 19th is: ' + ' ' + '' + convertBase20ToDecimal(1));
