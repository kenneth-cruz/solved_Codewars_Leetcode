function diff(s1, s2){
let difference = new Set([...s1].filter(x => !s2.has(x)));
// we created a new set.
// in the new set, take all elements of s1 and filter by:
// a function that takes in elemets of s1, and DOES NOT have them in s2
// the result will be a set containing a diff(a,b)
return(difference)


}

// diff(A,B) == what is in A that is NOT IN B

console.log('sample answer for March 11th is: ' + ' ' + '' + diff([1,2,3,4],[1,2,3,5]));
