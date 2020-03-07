// You are given the length and width of a 4-sided polygon.
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle,
// return its perimeter.

// ANSWER //
const areaOrPerimeter = function(l , w) {
  var perimeterRect = 2*l + 2*w;
  var areaSqu = l * w
  if ( l === w){
  return areaSqu
  }
  else {
  return perimeterRect
  }
};

console.log( 'test question five answer:' + ' '+ areaOrPerimeter(5,4))
