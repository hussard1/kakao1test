function solution5(str1, str2) {
    var s1 = getStr(str1);
    var s2 = getStr(str2);
    var result1 = 0, result2 = 0;

    for(var i=0; i<s1.length; i++) {
        for(var j=0; j<s2.length; j++) {
            if( s1[i] === s2[j] ) {
                result1++;
                result2++;
                s1.splice(i, 1);
                s2.splice(j, 1);
                i--;
                j=0;
            }

        }
    }
    result2 = result2 + s1.length + s2.length;

    return parseInt(((result1||1)/(result2||1))*65536)
}

function getStr(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        result.push(str.slice(i, i + 2).toLowerCase());
    }

    return result.filter(function (r) {
        return r.match(/[A-Za-z]{2}/gi);
    })
}



console.log(solution5("FRANCE", "french"));
console.log(solution5("handshake", "shake hands"));
console.log(solution5("aa1+aa2", "AAAA12"));
console.log(solution5("E=M*C^2", "e=m*c^2"));