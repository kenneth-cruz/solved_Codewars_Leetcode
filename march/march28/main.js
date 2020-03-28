
// Codewars: March 28th
// Codewar Level 7: Get the middle Character
// Kenneth Cruz


function getMiddle(s)
{
  let splitUp = s.split('')
  let lengthSplit = splitUp.length
  let halfLengthSplit = lengthSplit/2
  let flooredHalf = Math.floor(halfLengthSplit)
  if (lengthSplit % 2 == 0){
      return(splitUp[flooredHalf-1]+splitUp[flooredHalf])
  }
  else {
  return(splitUp[flooredHalf])
  }
}
