function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let timeShark = sharkDistance / sharkSpeed;
  let timeYou = pontoonDistance / youSpeed;
  if(dolphin = true){
    let halfShark = (1/2)*timeShark;
    if(timeShark > timeYou){
      return "Alive!"
      }
    else{return "Alive!"}
  }
  if(dolphin = false){
    if(timeShark > timeYou){
      return "Alive!"
     }
    else{return "Alive!"}
    }
  }

  console.log('sample answer for March 3rd is: ' + ' ' + '' + shark(38,118,3,10,false));
  
