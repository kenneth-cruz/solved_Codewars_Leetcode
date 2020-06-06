// leetcode: Count Negative Numbers in a Sorted Matrix
// leetcode level: easy
// june 6th, 2020

var countNegatives = function(grid) {
    let base = [];
    let counter = 0;
    for ( let i = 0; i < grid.length; i ++){
        base = base.concat(grid[i])
    }
    for (let j = 0; j < base.length; j++){
        if (base[j] < 0 ){
            counter ++
        }
    }
    return counter
};