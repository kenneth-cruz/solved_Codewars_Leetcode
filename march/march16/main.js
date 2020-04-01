function descendingOrder(n){
  let splitUp = n.toString().split("")
  splitUp.sort(function(a,b){return a-b})
  return parseInt(splitUp.reverse().join('',''))
}

// March 26th:
// Level 7: DescendingOrder
