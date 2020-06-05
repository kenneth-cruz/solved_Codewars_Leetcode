// leetcode level: easy
// date: june 4th, 2020
// leetcode name: number-of-students-doing-homework-at-a-given-time


var busyStudent = function(startTime, endTime, queryTime) {
    let answerScore = 0;
    for (let i = 0; i <endTime.length; i++){
        if(queryTime >= startTime[i] && queryTime <= endTime[i]){
            console.log('in sync');
            answerScore++;
        }
    }
    return answerScore
};