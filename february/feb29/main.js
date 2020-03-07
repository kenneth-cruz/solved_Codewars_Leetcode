const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
let milesLeft = mpg * fuelLeft;
  if (milesLeft - distanceToPump >= 0){
  return true;
  }
  else{
  return false;
  }
};

console.log('sample answer for Feb 29th, 2020 is:' + ''+ zeroFuel(50, 25, 2));
