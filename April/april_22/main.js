// Kenneth cruz ... April 22nd, 2020
// CodeWar Level : 7 KYU
// Codewar problem: X's and O's

function XO(str) {
    console.log(str, 'hello')
    let xcounter = 0;
    let ocounter = 0;
    for(let i = 0 ; i < str.length ; i++){
      if(str[i].toLowerCase() === "x"){
        xcounter ++;
      }
      if(str[i].toLowerCase() === "o"){
        ocounter ++;
      }
      else{xcounter += 0; ocounter += 0;}

    }
    if(xcounter === ocounter){
      return true;
    }
    if(xcounter === undefined || ocounter === undefined){
     return false;
    }
    else{return false}
}
