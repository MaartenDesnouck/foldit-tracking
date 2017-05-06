//Returning an integer as in how many units they differ from eachother 
//with first being smaller then second.

function dayDiff(first, second) {
    return Math.floor((second - first) / (1000 * 60 * 60 * 24));
}

function hourDiff(first, second) {
    return Math.floor((second - first) / (1000 * 60 * 60));
}

function minuteDiff(first, second) {
    return Math.floor((second - first) / (1000 * 60));
}

function secondDiff(first, second) {
    return Math.floor((second - first) / (1000));
}
