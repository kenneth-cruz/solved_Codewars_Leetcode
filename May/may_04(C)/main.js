// Kenneth cruz ... May 4nd, 2020
// Codewar Level : 7Kyu
// Codewar problem: Halving Sum

function halvingSum(n) {
    let sum = 0;
    while (n >= 1 ){
    sum += n;
    n = Math.floor(n/2);
    }
    return sum
}
