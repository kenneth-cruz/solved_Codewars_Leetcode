// codewar level 8
// codewar name: Abbreviate a Two Word Name



function abbrevName(name){
    let zoinks;
    for(let i = 0; i < name.length; i++){
    if (name[i] === ' ' ){
      zoinks = name[i+1].toUpperCase()
      }
    }
      return name[0].toUpperCase() + '.' + zoinks

}