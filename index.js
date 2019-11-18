var data = [
    [1, 2, 1],
    [2, 5, 2],
    [3, 1, 3]    
];
var normalizedData = [];
var verticalizedData = [];
var maxes = [];
var mins = [];

for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
        if (maxes[j] == undefined) maxes[j] = data[i][j]
        if (mins[j] == undefined) mins[j] = data[i][j]
        if (maxes[j] < data[i][j]) maxes[j] = data[i][j];
        if (mins[j] > data[i][j]) mins[j] = data[i][j];
    }
}

console.log(maxes);
console.log(mins);