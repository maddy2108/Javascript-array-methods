/**
 * Returns an index of the specified element in array or -1 if element is not found
 * 
 * @example
 *    ['Ace', 10, true], 10    => 1 
 *    ['Array', 'Number', 'string'], 'Date'    => -1 
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
let arr = ['Array', 'Number', 'string'];
let arr1 = [0, 1, 2, 3, 4, 5];
let arr2 = ['Ace', 10, true];
findElement = (arrInput, val) => {

    return arrInput.indexOf(val);;
}

console.log(findElement(arr, 'Array'));
console.log(findElement(arr1, 'Array'));
console.log(findElement(arr2, 'Array'));

console.log("-------------------------------End of task 1st------------------------------------------------------");

/**
 * Generates an array of odd numbers of the specified length
 * 
 * @example
 *    1 => [ 1 ] 
 *    2 => [ 1, 3 ] 
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
generateOdds = (len) => {
    let arrgenOdd = [len];
    let firstvalue = 1;
    if (len == 1) {
        arrgenOdd[0] = firstvalue
    }
    else if (len > 1) {
        for (let i = 0; i < len; i++ , firstvalue = firstvalue + 2) {
            arrgenOdd[i] = firstvalue;
        }
    }
    return arrgenOdd;

}

console.log(generateOdds(1))
console.log(generateOdds(5));

console.log("-------------------------------End of task 2nd------------------------------------------------------");

/**
 * Returns the doubled array - elements of the specified array are repeated twice using original order
 * 
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]  
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => [] 
 
function doubleArray(arr) {
    throw new Error('Not implemented');
} 
*/

let copyarr = [0, 1, 2, 3, 4, 5];
copyarrFun = (arr) => {
    let copyarr1 = [];
    copyarr1 = arr.concat(arr);

    return copyarr1;
}

console.log(copyarrFun(copyarr));


console.log("-------------------------------End of task 3rd------------------------------------------------------");


/**
 * Returns an array of positive numbers from the specified array in original order
 * 
 * 
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => [] 
 *
function getArrayOfPositives(arr) {
    throw new Error('Not implemented');
}
*/

let posarr = [0, -1, 2, 3, 4, 5];

let posfun = (arr) => {

    let posarr1 = arr.filter(function (val) {
        return val > 0;
    })


    return posarr1;
}

console.log(posfun(posarr));

console.log("-------------------------------End of task 4th------------------------------------------------------");

/**
 * Returns the array with strings only in the specified array (in original order)
 * 
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccon' ] => [ 'cat', 'dog', 'racoon' ]
 *
function getArrayOfStrings(arr) {
    throw new Error('Not implemented');
}
*/

let stringtype = [0, 1, 'cat', 3, true, 'dog'];
let stringtest = (arr) => {
    let arr2 = [];
    // arr.forEach(element => {
    //     if(typeof(element)== "string"){
    //          arr2=element;
    //     }

    // });
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "string") {
            arr2[count] = arr[i];
            count++;
        }

    }
    return arr2;

}

console.log(stringtest(stringtype));

console.log("-------------------------------End of task 5th------------------------------------------------------");

/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 * 
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 *
function removeFalsyValues(arr) {
    throw new Error('Not implemented');
}
*/
let removearr = [0, false, 'cat', NaN, true, ''];
let rm1 = [1, 2, 3, 4, 5, 'false'];
let rm2 = [false, 0, NaN, '', undefined];
removefun = (arr) => {
    let arr2 = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {


        if (arr[i] != 0 && arr[i] != false && arr[i] != null && arr[i] != "" && typeof arr[i] != undefined && !Number.isNaN(arr[i])) {
            arr2[count] = arr[i];
            count++;
        }
    }
    return arr2;
}

console.log(removefun(removearr));
console.log(removefun(rm1));
console.log(removefun(rm2));

console.log("-------------------------------End of task 6th------------------------------------------------------");

/**
 * Returns the array of useprcase strings from the specified array


 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ] =>
 [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ]
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 *
function getUpperCaseStrings(arr) {
    throw new Error('Not implemented');
}
*/

let upperArr = ['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation'];

let upperfun = (arr) => {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i].toString().toUpperCase();
    }
    return arr2;
}

console.log(upperfun(upperArr))

console.log("-------------------------------End of task 7th------------------------------------------------------");


/**
 * Returns the array of string lengths from the specified string array.
 * 
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 
function getStringsLength(arr) {
    throw new Error('Not implemented');
}
*/
let stringlenarr = ['', 'a', 'bc', 'def', 'ghij'];
let stringlenarr2 = ['angular', 'react', 'ember'];
let stringlenfun = (arr) => {
    let arr2 = [];
    for (let index = 0; index < arr.length; index++) {
        arr2[index] = arr[index].length;

    }
    return arr2;
}


console.log(stringlenfun(stringlenarr))
console.log(stringlenfun(stringlenarr2));

console.log("-------------------------------End of task 8th------------------------------------------------------");

/**
 * Returns the n first items of the specified array
 *  
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 1, 2 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 
function getHead(arr, n) {
    throw new Error('Not implemented');
}
*/

let specifiedarr1 = [1, 2, 3, 4, 5];
let specifiedarr2 = ['a', 'b', 'c', 'd'];
let specifiedfun = (arr, val) => {

    return arr.splice(0, val);

}

console.log(specifiedfun(specifiedarr1, 2));
console.log(specifiedfun(specifiedarr2, 3));

console.log("-------------------------------End of task 9th------------------------------------------------------");

/**
 * Returns the n last items of the specified array
 * 
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 *
function getTail(arr, n) {
    throw new Error('Not implemented');
}
*/
let tailarr1 = [1, 3, 4, 5];
let tailarr2 = ['a', 'b', 'c', 'd'];
let tailfun = (arr, val) => {

    return arr.slice(val);

}

console.log(tailfun(tailarr1, 2));
console.log(tailfun(tailarr2, 1));

console.log("-------------------------------End of task 10th------------------------------------------------------");


/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 * 
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 *
function toArrayOfSquares(arr) {
    throw new Error('Not implemented');
}
*/

let sqarr1=[0, 1, 2, 3, 4, 5];
let sqarr2=[10, 100, -1];

let sqfun=(arr)=>{
    let arr2=[];
    for (let index = 0; index < arr.length; index++) {
        
        arr2[index]=arr[index]*arr[index];
    }
    return arr2;
}

console.log(sqfun(sqarr1));
console.log(sqfun(sqarr2));
console.log("-------------------------------End of task 11th------------------------------------------------------");

// /**
//  * Returns every second item from the specified array:
//  * 
//  * Example :
//  * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
//  * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
//  * [ "a" ] => []
 
// function getSecondItems(arr) {
//     throw new Error('Not implemented');
// }
// */
// let secarr1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let secarr2=['a', 'b', 'c' , null];
// let secarr3=["a"]

// let secfun=()=>{
// let arr2=[];
// let count=0;
// for (let index = 1; index < arr.length; index+2){
//           arr2[count]=arr[index];
//           count++;
//    }
//    return arr2;

// }

// console.log(secfun(secarr1));
// console.log(secfun(secarr2));
// console.log(secfun(secarr3));



// console.log("-------------------------------End of task 12th------------------------------------------------------");



/** 
 * Returns the 3 largest numbers from the specified array
 * 
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 
function get3TopItems(arr) {
    throw new Error('Not implemented');
}
*/
let lararr=[];
let lararr1=[1,2];
let lararr2=[1,2,3];
let lararr3=[1,2,3,4,5,6,7,8,9,10];
let lararr4=[10,10,10,10];

let get3TopItems=(arr)=>{
    let arr3=[];
    let arr2=arr.reverse();
    for(let i=0;i<3;i++){
        arr3[i]=arr2[i];
    }
  return arr3;
}

console.log(get3TopItems(lararr));
console.log(get3TopItems(lararr1));
console.log(get3TopItems(lararr2));
console.log(get3TopItems(lararr3));
console.log(get3TopItems(lararr4));



console.log("-------------------------------End of task 13th------------------------------------------------------");


/**  
 * Returns the number of positive numbers from specified array
 * 
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 *
function getPositivesCount(arr) {
    throw new Error('Not implemented');
}
*/

let poscount1=[];
let poscount2=[-1, 0, 1];
let poscount3=[1, 2, 3];
let poscount4=[null, 1, 'elephant'];
let poscount5=[1, '2'];

let poscoutfun=(arr)=>{
    let count=0;
    for (val of arr) {
        if(val>0 && typeof val=="number"){
            count++;
        }
        
    }
    return count;
}

console.log(poscoutfun(poscount1));
console.log(poscoutfun(poscount2));
console.log(poscoutfun(poscount3));
console.log(poscoutfun(poscount4));
console.log(poscoutfun(poscount5));
console.log("-------------------------------End of task 14th------------------------------------------------------");
/** 
 * Sorts digit names
 * 
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
    throw new Error('Not implemented');
}
console.log("-------------------------------End of task 15th------------------------------------------------------");

/** 
 * Returns the sum of all items in the specified array of numbers
 * 
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 
function getItemsSum(arr) {
    throw new Error('Not implemented');
}
*/
let sumarr1=[1, 2, 3];
let sumarr2=[-1, 1, -1, 1];
let sumarr3=[1, 10, 100, 1000];

let sumfun=(arr)=>{
    let ans=0;
    arr.forEach(element => {
        ans=element+ans;
    });
   return ans;
}
console.log(sumfun(sumarr1));
console.log(sumfun(sumarr2));
console.log(sumfun(sumarr3));
console.log("-------------------------------End of task 16th------------------------------------------------------");

/** 
 * Returns the number of all falsy value in the specified array
 * 
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 *
function getFalsyValuesCount(arr) {
    throw new Error('Not implemented');
}
*/
let falsyarr1=[];
let falsyarr2=[ 1, '', 3 ];
let falsyarr3=[ -1, 'false', null, 0 ];
let falsyarr4=[ null, undefined, NaN, false, 0, '' ];
let falsyfun=(arr)=>{
    let count=0;
    for (val of arr) {
        if(!val){
            count++;
        }
        
    }
    return count;

}

console.log(falsyfun(falsyarr1));
console.log(falsyfun(falsyarr2));
console.log(falsyfun(falsyarr3));
console.log(falsyfun(falsyarr4));
console.log("-------------------------------End of task 17th------------------------------------------------------");
/**
 * Returns a number of all occurences of the specified item in an array  
 * 
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2 
 *    [ true, 0, 1, 'true' ], true => 1
 *
function findAllOccurences(arr, item) {
    throw new Error('Not implemented');
}
*/

let occarr1=[0, 0, 1, 1, 1, 2];
let occarr2=[ 1, 2, 3, 4, 5 ];
let occarr3=[ 'a','b','c','c' ];
let occarr4=[ null, undefined, null ];
let occarr5=[ true, 0, 1, 'true' ];

let occfun=(arr,el)=>{
    let count=0;
    for (val of arr) {
        if(val==el){
            count++;
        }
    }
    return count;
}

console.log(occfun(occarr1,1));
console.log(occfun(occarr2,0));
console.log(occfun(occarr3,'c'));
console.log(occfun(occarr4,null));
console.log(occfun(occarr5,true));
console.log("-------------------------------End of task 18th------------------------------------------------------");

/**
 * Concatenates all elements from specified array into single string with ',' delimeter  
 * 
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 *
function toStringList(arr) {
    throw new Error('Not implemented');
}
*/
let contarr1=[0, false, 'cat', NaN, true, ''];
let contarr2=[1, 2, 3, 4, 5];
let contarr3=['rock', 'paper', 'scissors'];
let contfun=(arr)=>{
  
  return data=arr.join(",");
}

console.log(contfun(contarr1));
console.log(contfun(contarr2));
console.log(contfun(contarr3));

console.log("-------------------------------End of task 19th------------------------------------------------------");

/**
 * Sorts the specified array by country name first and city name
 (if countries are equal) in ascending order.
 * 
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]  
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *
function sortCitiesArray(arr) {
    throw new Error('Not implemented');
}
*/
let sortarr=[
          { country: 'Russia',  city: 'Moscow' },
          { country: 'Belarus', city: 'Minsk' },
          { country: 'Poland',  city: 'Warsaw' },
          { country: 'Russia',  city: 'Saint Petersburg' },
         { country: 'Poland',  city: 'Krakow' },
         { country: 'Belarus', city: 'Brest' }
       ] ;

let sortfun=(arr)=>{
      
    arr.sort(function(a,b){
        let name1=a.country.toUpperCase;
        let name2=b.country.toUpperCase;
        if(name1>name2){
            return 1;
        }
        else if(name1<name2){
            return -1;
        }
        else{
            return 0;
        }

    });
    return arr;
}

console.log(sortfun(sortarr));

console.log("-------------------------------End of task 20th------------------------------------------------------");
/**
 * Creates an array of integers from the specified start to end (inclusive)
 * 
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 *
function getIntervalArray(start, end) {
    throw new Error('Not implemented');
}
*/
let getIntervalArray=(start,end)=>{
    let arr2=[];
    let len=end-start;
    for (let index = 0; index <=len; index++) {
          arr2[index]=start;
          start++;
        }
        return arr2;

}

console.log(getIntervalArray(1,5));
console.log(getIntervalArray(-2,2));
console.log(getIntervalArray(0,100));
console.log(getIntervalArray(3,3));
console.log("-------------------------------End of task 21th------------------------------------------------------");
/**
 * Returns array containing only unique values from the specified array.
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 
function distinct(arr) {
    throw new Error('Not implemented');
}
*/

let disarr1=[1, 2, 3, 3, 2, 1];
let disarr2=['a', 'a', 'a', 'a'];
let disarr3=[1, 1, 2, 2, 3, 3, 4, 4];

let disfun=(arr)=>{
    return arr2=[...new Set(arr)]

}

console.log(disfun(disarr1));
console.log(disfun(disarr2));
console.log(disfun(disarr3));


console.log("-------------------------------End of task 22th------------------------------------------------------");