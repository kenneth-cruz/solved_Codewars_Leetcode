// Kenneth cruz ... April 19th, 2020
// Leetcode Level : Easy
// Leetcode problem: Word Pattern

var wordPattern = function(pattern, str) {
    let split = str.split(" ");
    if(pattern.length !== split.length) {
        return false;
    }
    let map = {};
    for(let i = 0; i < pattern.length; i++) {
        if(map[pattern[i]] || map["str_" + split[i]]) {
            if(map[pattern[i]] !== split[i]) return false;
            if(map["str_" + split[i]] !== pattern[i]) return false;
        }
        map[pattern[i]] = split[i];
        map["str_" + split[i]] = pattern[i];
    }
    return true;
};
