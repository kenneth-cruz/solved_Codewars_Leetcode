// Kenneth cruz ... May 9th, 2020
// LeetCode Level : Easy
// LeetCode Problem: Destination City

var destCity = function(paths) {
    let U = new Set(paths.map(path => path[0]));
    let V = new Set(paths.map(path => path[1]));
        return [...V].filter(x => !U.has(x)).pop();

};
