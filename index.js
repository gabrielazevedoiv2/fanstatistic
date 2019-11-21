var data = [ // Variável do meio é a mais significante no exemplo
    [1, 2, 1],
    [2, 5, 2],
    [3, 1, 3],
];

var results = [
    [3],
    [7],
    [4]
];

function verticalize(data) {
    var newData = [];
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            if (newData[j] == undefined) newData[j] = [];
            newData[j].push(data[i][j]);
        }
    }
    return newData;
}

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
            normalizedData[i][j] = parseFloat((data[i][j] / maxes[j]));
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

function calculateDistances(variableData, median) {
    return variableData.map(y => y - median);
}

function varSignificance(normalizedData, normalizedResults) {
    //console.log(normalizedData);
    // console.log(normalizedResults);
    var dataMed = calculateMedian(normalizedData);
    var resMed = calculateMedian(normalizedResults);
    // console.log(dataMed)
    // console.log(verticalize(normalizedData))
    var xs = verticalize(normalizedData).map((x, index) => calculateDistances(x, dataMed[index]))
    // console.log(xs);
}

varSignificance(normalizeData(data, calculateMaxes(data)), normalizeData(results, calculateMaxes(results)));