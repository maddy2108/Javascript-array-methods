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

let numbers=[2,5,1,3,10];
let sortedArray=numbers.sort((a,b)=>{
return a-b;
})

console.log(sortedArray)

let namesArray = ["jayanth", "madhav", "smita", "jyoti"];

let sortednameArray=namesArray.sort();
console.log(sortednameArray);

//Question
//value should comes two time only
//output[1,1,2,2,5,5]
let numArr=[1,1,1,1,2,2,5,5,5,5]
let empArr=[]
numArr.filter(function(val){
if(empArr.indexOf(val)>-1){
    return false;
}
else{
    empArr.push(val);
}
})


console.log(empArr);
let conArr=empArr.concat(empArr);
console.log(conArr);

console.log(conArr.sort());


//to do sum
let sumred=numArr.reduce((acc,val)=> acc+val);

console.log(sumred);

//to find the max value
let maxred=numArr.reduce((acc,val)=> acc>val?acc:val);

console.log(maxred);

//output=jayanthjyothimadhavsmita
let namedcatred=namesArray.reduce((acc,val)=> acc+val);
console.log(namedcatred);
//out=jayanth-jyothi-madhav-smita
let namedcatred1=namesArray.reduce((acc,val)=> `${acc}-${val}`);
console.log(namedcatred1);

//input numbers=[2,5,1,3,10];
//out=[1, 2, 3]
//it will not effort the numbers array
console.log(numbers.slice(0,3))
console.log(numbers);


//getting the last value
//it will effort the array
console.log(numbers.pop())
console.log(numbers)
console.log(numbers.push(10))
console.log(numbers)

//the lenght of the array same when we are using delete function on Array
//output=[empty, 2, 3, 5, 10]
// console.log(delete numbers[0]);
// console.log(numbers);


//adding and removeing from start in Array
console.log(numbers.shift());
console.log(numbers);
console.log(numbers.unshift(1));
console.log(numbers);


//it will delete the mid value and add the values
console.log(numbers.splice((numbers.length)/2,1));
console.log("outputSplice= "+ numbers);

































