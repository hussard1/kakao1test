function solution7(t) {

    var timetable = [];

    t.forEach(function (time) {
            var d = time.split(" ");
            timetable.push({
                start: (new Date(d[0] +"T" +d[1]).getTime() - d[2].replace("s","") * 1000) + 1,
                end: new Date(d[0] +"T" +d[1]).getTime()
            });
        }
    );

    var result = 0;
    for(var i = 0; i < timetable.length; i++) {
        var num = 1;
        for(var j = i + 1; j < timetable.length; j++) {
            if(timetable[j].start <= timetable[i].end + 999 && timetable[i].end <= timetable[j].end) {
                num++;
            }
        }
        result = result <= num ? num : result;
    }

    return result;
}


console.log(solution7([ "2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s" ]));
console.log(solution7([ "2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s" ]));
console.log(solution7([ "2016-09-15 20:59:57.421 0.351s", "2016-09-15 20:59:58.233 1.181s", "2016-09-15 20:59:58.299 0.8s", "2016-09-15 20:59:58.688 1.041s", "2016-09-15 20:59:59.591 1.412s", "2016-09-15 21:00:00.464 1.466s", "2016-09-15 21:00:00.741 1.581s", "2016-09-15 21:00:00.748 2.31s", "2016-09-15 21:00:00.966 0.381s", "2016-09-15 21:00:02.066 2.62s" ]));

