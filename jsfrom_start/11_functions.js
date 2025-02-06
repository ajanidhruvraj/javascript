// simple function

function add(){
    let a=10
    let b=20
    let c=a+b
    console.log(c);
}
add()
// paramiterized function
function add1(a,b){
    let c=a+b
    console.log(c);
}
add1(10,20)

function mul1(a=0,b=0){// default value
    let c=a*b
    return c
}
let multiply=mul1(10,20)
console.log(multiply);

function cart(...mul){
    return mul
}
console.log(cart(1,2,3,45,5));
console.log(cart(1));
let mysum = Symbol("key")

let obj = {
    name: "dhruvraj",
    "full name": "Dhruvraj Ajani",
    [mysum]:"kye1",
    age: 21,
    email:"dhruv@MediaList.com"
}
function details(anyobject){
    return `hello {anyobject.full name} your age is {anyobject.age}.`
}

console.log(details(obj));