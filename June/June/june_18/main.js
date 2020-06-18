// 2 level 8 codewars day
// codewars: Convert boolean values to strings 'Yes' or 'No'. 
function boolToWord( bool ){
    if(bool === true){
    return 'Yes'
    }
    else{return 'No'}
  }
// codewars: Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort(function(a,b) {return a-b})
      return args[0]
    }
  }