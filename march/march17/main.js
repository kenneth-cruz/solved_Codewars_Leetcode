const tBills=(amountInAccount, duration, rate)=>{
let answer = amountInAccount/(1 - (rate * duration)/36500);
return answer.toFixed(2)
}

// AMOUNTINVEST = AMOUNT DEDUCT / [ 1 -  [[(RATE * DURATION ) / (100 *365) ] ]

console.log('sample answer for March 17th is: ' + ' ' + '' + tBills(1000,90,13.5));
