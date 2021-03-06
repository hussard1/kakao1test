function solution1(n, arr1, arr2) {
    const result = [];
    for (let i = 0; i < n; i ++) {
        let c = (arr1[i] | arr2[i]).toString(2);
        if(c.length < n) c = new Array(n - c.length + 1).join("0") + c;
        c = c.replace(/1/gi, "#");
        c = c.replace(/0/gi, " ");
        result.push(c);
    }
    return result;
}

console.log(solution1(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution1(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));