function solution3(size, cities) {

    var cache = {},
        result = 0;

    for(var i = 0; i < cities.length; i++) {
        var city = cities[i].toLowerCase();
        var cacheSize = Object.keys(cache).length;
        if (cache[city]) {
            result = result + 1;
        } else {
            if(cacheSize >= size) {
                delete cache[Object.keys(cache)[0]];
            }
            cache[city] = true;
            result = result + 5;
        }
    }
    return result;
}

console.log(solution3(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution3(3, 	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]));
console.log(solution3(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
console.log(solution3(5, 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
console.log(solution3(2, 	["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution3(0, 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
