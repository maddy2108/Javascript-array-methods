// var name = "jayanth";
//     name = 'babu';
//     name = `jayanthbabu`;
//     console.log(typeof(name));

// var age = 20.45;    
// console.log(typeof(age));

// var c ='20';
// var b='30';
// console.log(parseInt(name));
// console.log(b-c);

// var data;
// console.log(typeof(data));
// var d = null;
// console.log(typeof(d));

// var e = true;
// var f = true;
// console.log(f+name);






var jayanth = {
    name: 'jayanth',
    age: 20,
    getFullName: function () {
        console.log('my name is ' + this.name + '. and my age is' + this.age);
        console.log(`my name is ${this.name} and 
        my age is ${this.age}`)
    }
}
console.log(this);
console.log(jayanth.name);
console.log(jayanth['name']);
jayanth.getFullName();

var arr = ["jayanth", 20, {sdfs:'jayasd'}];
console.log(arr[2].sdfs);



