// var obj = {
//     name: 'jayanth',
//     getDetails: function () {
//         console.log(this.name);
//     }
// };


// obj.getDetails();


// // console.log(new Object());

// // console.log(obj);


// const Details = function (name, age) {
//     this.name = name;
//     this.age = age;
//     this.getDetails = function () {
//         return `my name is ${name} and my age is ${age}`
//     }
// }
// var Jayanth = new Details('jayanth', 25);

// Jayanth.loc = 'bangalore';
// console.log(Jayanth);


// class MyDetails {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//    static getDetails = (name, age) => {
//         return `my name is ${name} and my age is ${age}`
//     }
// }
// console.log(MyDetails.getDetails('jayanth', 25));




// //console.log(new Details());

// // console.log(this);


// // const name = 'jaytanth';
// // name= 'madhav';

// const my = {
//     name: 'jaya'
// }

// my.name = 'madhav';
// console.log(my);



console.log('jayanth');

setTimeout(function () {
    console.log('inside set time');
});

console.log('jayanth2');


var counter = 0;
var myTime = setInterval(function () {
    document.getElementById('timer').innerHTML = counter++
}, 1000);
function stopTimer(){
    clearInterval(myTime);
}
