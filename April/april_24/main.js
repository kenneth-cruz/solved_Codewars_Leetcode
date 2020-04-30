// Kenneth cruz ... April 24th, 2020
// CodeWar Level : 7 KYU
// Codewar problem: Calculator: Coin Combination

var coinCombo = function(cents) {
  console.log(cents, 'total money in cents')
  let array = [0,0,0,0]
  let quarterDivisible = 0;
  let dimeDivisible = 0;
  let nickelDivisible = 0;
  let pennyDivisible = 0;
  quarterDivisible = Math.floor(cents/25);
  console.log(quarterDivisible, 'quarters')
  dimeDivisible = Math.floor((cents - quarterDivisible*25)/10)
  console.log(dimeDivisible , 'dimes')
  nickelDivisible = Math.floor((cents - quarterDivisible*25 - dimeDivisible*10)/5)
  console.log(nickelDivisible , 'nickels')
  pennyDivisible = Math.floor((cents - quarterDivisible*25 - dimeDivisible*10 - nickelDivisible*5)/1)
  console.log(pennyDivisible , 'penneis')
  array[0] = pennyDivisible
  array[1] = nickelDivisible
  array[2] = dimeDivisible
  array[3] = quarterDivisible
  return array

}
