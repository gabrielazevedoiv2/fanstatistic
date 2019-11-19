var data = [ // Variável do meio é a mais significante no exemplo
    [1, 2, 1],
    [2, 5, 2],
    [3, 1, 3]
];

var results = [
    3,
    7,
    4
]

function calculateMaxes(data) {
    var maxes = [];
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            if (maxes[j] == undefined) maxes[j] = data[i][j]
            if (maxes[j] < data[i][j]) maxes[j] = data[i][j];
        }
    }
    return maxes;
}

function calculateMins(data) {
    var mins = [];
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            if (mins[j] == undefined) mins[j] = data[i][j]
            if (mins[j] > data[i][j]) mins[j] = data[i][j];
        }
    }
    return mins;
}

function normalizeData(data, maxes) {
    var normalizedData = [];
    for (var i = 0; i < data.length; i++) {
        normalizedData[i] = [];
        for (var j = 0; j < data[i].length; j++) {
            normalizedData[i][j] = parseFloat((data[i][j] / maxes[j]).toFixed(2));
        }
    }
    return normalizedData;
}

function varSignificance(normalizedData, results) {
    
}

console.log(calculateMins(data));
console.log(calculateMaxes(data));
console.log(normalizeData(data, calculateMaxes(data)));