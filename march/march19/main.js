function disemvowel(str) {
  console.log(str)
  let split = str.split("")
  for(i=0;i<split.length;i++){
    if(split[i] == 'a' || split[i] == 'A' || split[i] == 'E' || split[i] == 'e' || split[i] == 'I' || split[i] == 'i' || split[i] == 'O' || split[i] == 'o' || split[i] == 'U' || split[i] == 'u'){
    split[i] = ''
    }
  }
  return(split.join("",""))
}


// March 19th
// level 7: disemvowel Trolls
