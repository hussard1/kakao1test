function solution6(n, m, board) {
    var result = 0,
        flag = true;

    board = board.map(function (b) {
        return b.split("");
    });

    while (flag) {
        var set = [];
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < m - 1; j++) {
                var temp = board[i][j];
                if (temp !== "#" && temp === board[i][j + 1] && temp === board[i + 1][j] && temp === board[i + 1][j + 1]) {
                    set.push({i, j});
                }
            }
        }

        if(set.length === 0) {
            flag = false;
            return result;
        }

        set.forEach(function (s) {
            board[s.i][s.j] = "@";
            board[s.i + 1][s.j] = "@";
            board[s.i][s.j + 1] = "@";
            board[s.i + 1][s.j + 1] = "@";
        });


        for (var i = 0; i < n; i++) {
            for (var j = 0; j < m; j++) {
                var temp = board[i][j];
                if (temp === "@") {
                    result++;
                    board[i][j] = "#"
                }
            }
        }

        for(var i=0; i< n; i++) {
            for (var j = 0; j < m; j++) {
                var temp = board[i][j];
                if (temp === "#") {
                    var c = 1;
                    while(board[i-c]) {
                        board[i-c+1][j] = board[i-c][j];
                        board[i-c][j] = "#";
                        c++;
                    }
                }
            }
        }
        set = [];
    }
}

console.log(solution6(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution6(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));