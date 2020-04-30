// Kenneth cruz ... April 30th, 2020
// CodeWar Level : 7 KYU
// CodeWar problem: Basic Calculator


function calculate(num1, operation, num2) {
 if (operation === '+'){
  return (num1 + num2)
 }

  if (operation === '-'){
  return (num1 - num2)
 }

  if (operation === '/'){
  if (num2 === 0){
    return null;
  }
  return (num1 / num2)
 }

  if (operation === '*'){
  return (num1 * num2)
 }
 else{return null}
}
