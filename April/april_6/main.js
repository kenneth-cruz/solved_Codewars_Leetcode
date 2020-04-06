// Kenneth cruz ... April 6th, 2020
// Leetcode Level : Easy
// Leetcode problem: Self Dividing Numbers

var selfDividingNumbers = function(left, right) {
    let array=[];
    for(i=left; i<right+1; i++){
        if(i<10){
            array.push(i)
            }
        else if(i>=10 && i<100){
            let splitUpNumbers = i.toString().split('')
            if(i % splitUpNumbers[0] === 0 && i % splitUpNumbers[1] === 0 ){
                array.push(i)
            }
            }
        else if(i>=100 && i<1000){
            let splitUpNumbers = i.toString().split('')
            if(i % splitUpNumbers[0] === 0 && i % splitUpNumbers[1] === 0 && i % splitUpNumbers[2] === 0){
                array.push(i)
            }
            }
        else if(i>=1000 && i<10000){
            let splitUpNumbers = i.toString().split('')
            if(i % splitUpNumbers[0] === 0 && i % splitUpNumbers[1] === 0 && i % splitUpNumbers[2] === 0 && i % splitUpNumbers[3] === 0){
                array.push(i)
            }
            }

        }
    return(array);
};
