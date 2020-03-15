function hero(bullets, dragons){
let dragonBullets = 2 * dragons
if(bullets < dragonBullets){
  return false
}
else{return true}
}

console.log('sample answer for March 15th is: ' + ' ' + '' + hero(20,5));
