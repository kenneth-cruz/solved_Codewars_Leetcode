// codewar: level 8
// codewar name: quarter of a year



const quarterOf = (month) => {
    if(month > 9){
    return 4
    }
    if(month > 6){
    return 3
    }
    if(month > 3){
    return 2
    }
    else{return 1}
  }