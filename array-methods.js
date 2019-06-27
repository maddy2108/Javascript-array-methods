var arr = [1, 2, 3, 4];
var arr1 = [1, 2, 3, 4345, 5];



var sum = (data) => {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data[i];
    }
    return total
}

console.log(sum(arr));
console.log(sum(arr1));


var total = 0;
var sum1 = (data) => {
    for (var val of data) total += val
    return total;
};

console.log(sum1(arr))


var sum2 = (data) => {
    for (var index in data) {
        console.log(index)
    }
}

sum2(arr);


// foreach
var addition = () => {

}
function foreachSum() {
    var total = []
    arr.forEach(function (value, index, array) {
        total.push(value * value)
    })
    return total;
}

console.log(foreachSum(arr));
var names = ["jayanth", "madhav", "smita", "jyothi"]
function mapSum(data) {
    var newArr = data.map(function (value, index, array) {
        return value;
    })
    return newArr;
}

console.log(mapSum(names));


function FilterSum(data) {
    var newArr = data.filter(function (value, index, array) {
        return value.indexOf('j') > -1 ? value : null;
    })
    return newArr;
}

console.log(FilterSum(names));























