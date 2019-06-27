

let sum = function (a, b) {
    return a + b
}



function add() {
    var a = document.getElementById('input1').value;
    var b = document.getElementById('input2').value;
  document.getElementById('output').innerHTML = `
    <h2>
    the sum of two values is ${parseInt(a)+parseInt(b)}
    </h2>
  `
    
}





(function (a, b) {
    console.log(a + b)
})(2, 3)








