
function analyzeArray(arr) {
    if(arr == null || arr == undefined) {
        return {};
    }
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    return {
        length : arr.length,
        min : min,
        max : max,
        average : sum / arr.length
    }
}
    module.exports = analyzeArray;