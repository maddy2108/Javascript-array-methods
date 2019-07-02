var data = [0, false, 'cat', NaN, true, ''];



// 0, false, NaN, null, undefined, '';
var arr = [];
for (var value of data) {
    value ? arr.push(value) : undefined
}
console.log(arr);




console.log(obj);
var objLen = [
    {
        name: 'jayanth',
        age: 25,
        loc: 'bangalore'
    },
    {
        age: 25,
        loc: 'bangalore'
    },
    {
        name: 'jayanth',
    },
    {
        name: 'jayanth',
        age: 25,
    }
];
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(json => console.log(json))




//console.log(obj.hasOwnProperty('sdfd'));



















var obj = {
    name: 'jayanth',
    age: 25,
    loc: 'bangalore'
};
// var obj1 = {...obj};
var obj1 = Object.assign({}, obj);
obj1.name = 'madhav';
console.log(obj, obj1);
// var newData = Object.assign({},obj1,obj);
// console.log(newData);

// //Object.freeze(obj);
// obj.name = 'Madhav';
// obj.something = 'sdfe'
// console.log(Object.isExtensible(obj));


