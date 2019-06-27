var a = 20;
var b = a;
b = 25;
console.log(a,b);


var c= {
    name:'jayanth',
    age:25
}

var d = c;

d.name = "babu";

console.log(c, d);


var arr = [1,2,3,4];
var n = [1,3];

//var arr1 = arr.concat([]);
var arr1 = arr.slice();
arr1.push(5);

console.log(arr, arr1)