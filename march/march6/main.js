function formatMoney(amount){
  let rounding = amount.toFixed(2)
  let money = `$${rounding}`
  return money
}
console.log('sample answer for March 6th is: ' + ' ' + '' + formatMoney(100));
