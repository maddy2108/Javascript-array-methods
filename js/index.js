// //document.getElementById('name').innerHTML = 'madhav'
// function changeName() {
//     console.log(document.getElementById('name'));
//     document.getElementById('name').innerHTML = 'madhav'
// }

// function hide() {
//     document.getElementsByTagName('div')[0].style.display = 'none';
//     document.getElementsByTagName('div')[1].style.display = 'none'
//     console.log(document.getElementsByTagName('div'))
// }






























import utils from './imports/opertaions.js';

console.log(utils.add(2, 3));
console.log(utils.mul(3,4));
console.log(utils.sub(5,3));

console.log(JSON.parse(localStorage.getItem('details')).name);
console.log(JSON.parse(sessionStorage.getItem('details')).name);
sessionStorage.removeItem('details');







