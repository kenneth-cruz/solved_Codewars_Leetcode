
// Codewars: March 25 th
// Codewar Level 7: Number of People on the Bus
// Kenneth Cruz


var number = function(busStops){
  let getOn = 0
  let getOff = 0
  for(i=0;i<busStops.length;i++){
    getOn += busStops[i][0]
    getOff += busStops[i][1]
  }
  return getOn-getOff
}
