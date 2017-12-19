function solution2(score) {
    let result = [],
        num,
        operation;

    num = score.match(/\d+/gi);
    operation = score.match(/[SDT*#]+/gi);

    for(let i = 0; i < 3; i++) {
        let n = parseInt(num[i]);
        let op = operation[i].split("");

        if(op[0] === 'D') {
            n = n * n;
        } else if (op[0] === 'T') {
            n = n * n * n;
        }

        if(op[1]) {
            if (op[1] === '*') {
                n = n * 2;
                if(result[i-1]) {
                    result[i-1] = result[i-1] * 2
                }
            } else if (op[1] === '#') {
                n = n * -1
            }
        }

        result.push(n);

    }

    return result.reduce(function (a, b) {
        return a + b
    });
}

console.log(solution2("1S2D*3T"));
console.log(solution2("1D2S#10S"));
console.log(solution2("1D2S0T"));
console.log(solution2("1S*2T*3S"));
console.log(solution2("1D#2S*3S"));
console.log(solution2("1T2D3D#"));
console.log(solution2("1D2S3T*"));
