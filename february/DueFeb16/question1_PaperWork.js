// PROBLEM Beginner Series #1 School Paperwork //

// Your classmates asked you to copy some paperwork for them.
// You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.
// Example:
// paperwork(5, 5) == 25
// Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!

//ANSWER//
let classmates = 0;
let pages = 0;
function paperwork(classmates, pages){
  let totalPages = classmates * pages
  if (classmates < 0 || pages < 0){
    return (0);
  }
  else{
    return totalPages
  }
}

console.log( 'test question one answer:' + ' '+ paperwork(5,5))
