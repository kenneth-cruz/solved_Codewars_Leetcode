// leetcode level, easy
// leetcode name:  Remove Outermost Parentheses
// june22nd



var removeOuterParentheses = function(S) {
    let depthCount = -1; // current depth of parentheses
    let res = '';
    
    for (i = 0; i < S.length; i++) {
        // not adding parentheses at depth 0
        if (S[i] === '(') {
            depthCount += 1;
            if (depthCount > 0) {
                res += S[i];
            }
        } else {
            if (depthCount > 0) {
                res += S[i];
            }
            depthCount -= 1;
        }   
    }

    return res;
};