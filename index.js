var data = [ // Variável do meio é a mais significante no exemplo
    [1, 2, 1],
    [2, 5, 2],
    [3, 1, 3],
];

var results = [
    [3],
    [7],
    [4]
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

function calculateMedian(data) {
    var median = [];
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            if (median[j] == undefined) median[j] = 0;
            median[j] += data[i][j] / data.length;
        }
    }
    return median;
}

function calculateDistance(value, median) {
    return value - median;
}

function varSignificance(normalizedData, normalizedResults) {
    console.log(normalizedData);
    console.log(normalizedResults);
    console.log(calculateMedian(normalizedData));
    console.log(calculateMedian(normalizedResults));
    var dataMed = calculateMedian(normalizedData);
    var resMed = calculateMedian(normalizedResults);
    for (var i = 0; i < normalizedData.length; i++) {
        for (var j = 0; j < normalizedData[i].length; j++) {
            console.log(calculateDistance(normalizedData[i][j], dataMed[i]));
        }
    }
}

varSignificance(normalizeData(data, calculateMaxes(data)), normalizeData(results, calculateMaxes(results)));