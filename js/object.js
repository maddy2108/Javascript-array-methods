var objects={
   name:'madhav',
   getDetails:function(){
       console.log(this.name)
   },
   age:25,
   loc:'Bangalore'
}

//two way to access the object

console.log(objects.name,objects.getDetails);
console.log(objects['name'])


let {name,age,loc}=objects;

console.log(name,age,loc);


function add(...a){
    console.log(a);
}

console.log(add(1,2,3,4));


let a=[1,2,3,4,5,6,7]

let [firstvalue,secondvalue]=a;

console.log(firstvalue)


