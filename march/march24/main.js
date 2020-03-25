
// Codewars: March 24th
// Codewar Level 7: Credit Card Mask
// Kenneth Cruz


let array = [];
function maskify(cc) {
  console.log(cc)
  let stringCC  = cc.toString()
  let last4digits = stringCC.slice(stringCC.length - 4)
  console.log(last4digits, 'last 4 digits');
  console.log(last4digits.length)
   if(cc.length <4){
  return cc
  }
  if(last4digits.length < 4){
  console.log('this has less than 4 digits')
  return last4digits
  }

  console.log(stringCC, 'is a string')
  let numberPrints = cc.toString().length
  console.log(cc.toString().length)
  let numberOfHashes = "#".repeat(cc.toString().length-4)
  console.log(numberOfHashes, 'numberOfHashes')
  return (numberOfHashes + last4digits)
}
// const id = "ctl03_Tabs1";
// console.log(stringCC.slice(stringCC.length - 4)); //Outputs: Tabs1
// console.log(id.slice(id.length - 1)); //Outputs: 1

// turn all digits to #
