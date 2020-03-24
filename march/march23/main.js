
// Codewars: March 21st
// Codewar Level 7: Geometry Basics: Triangle Perimeter in 2D
// Kenneth Cruz


function trianglePerimeter(triangle){
  console.log(triangle)
  console.log(triangle.a.x)
  let distanceAB = (((triangle.b.x-triangle.a.x)*(triangle.b.x-triangle.a.x)) + ((triangle.b.y-triangle.a.y)*(triangle.b.y-triangle.a.y)))
  console.log(Math.sqrt(distanceAB))
  let distanceBC = (((triangle.c.x-triangle.b.x)*(triangle.c.x-triangle.b.x)) + ((triangle.c.y-triangle.b.y)*(triangle.c.y-triangle.b.y)))
  console.log(Math.sqrt(distanceBC))
  let distanceAC = (((triangle.c.x-triangle.a.x)*(triangle.c.x-triangle.a.x)) + ((triangle.c.y-triangle.a.y)*(triangle.c.y-triangle.a.y)))
  console.log(Math.sqrt(distanceAC))
  let perimeter = Math.sqrt(distanceAB) + Math.sqrt(distanceBC) + Math.sqrt(distanceAC)
  return perimeter
}
