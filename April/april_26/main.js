// Kenneth cruz ... April 26th, 2020
// CodeWar Level : 6 KYU
// Leetcode problem: Find the odd int

function findOdd(A) {
  //count the numbers and push them into the array
  //find the odd number and  return index value
  var count = 0;
  var final = [];
  var index = 0;
  for(var i=0;i<A.length;i++)
  {
  var t = A[i];
  for(var j=0;j<A.length;j++)
  {
  if(t==A[j])
  {
  count = count+1;
  }
  }//console.log(count)
  final.push(count);
 }
 for(var i=0;i<final.length;i++)
  {
  if(final[i]%2!=0)
  {
  index = i;
  break;
  }
}

 return A[index]
}
