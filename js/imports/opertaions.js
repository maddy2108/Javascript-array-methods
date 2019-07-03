

var utils = {

    add: function add(a, b) {
        return a + b
    },
    mul: function mul(a, b) {
        return a * b
    },
    sub: function sub(a, b) {
        return a - b;
    }
}

export default utils;

var jayanth = {
    name:'jayanth',
    age:25
}

localStorage.setItem('details',JSON.stringify(jayanth));
sessionStorage.setItem('details',JSON.stringify(jayanth))


