// codewar level 7KYU
// june 2nd

function getSumOfDigits(integer) {
    var sum = 0;
    console.log(integer);
    var digits =  Math.floor(integer).toString();
    for(var i = 0; i < digits.length; i ++) {
      sum += parseInt(digits[i]);
    }
    return(sum)
    }