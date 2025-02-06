let mysum = Symbol("key1")// interview

let obj = {
    name: "dhruvraj",
    "full name": "Dhruvraj Ajani",
    [mysum]:"kye1",
    age: 21,
    email:"dhruv@MediaList.com"
}


console.log(obj.age);
console.log(obj["full name"]);
console.log(obj["name"]);
console.log(obj.name);
console.log(obj[mysum]);

obj.email="dhruvraj@mail.com"
// Object.freeze(obj) //it will freez the object
// obj.email="asdfg@mail.com"
console.log(obj);


obj.greetings = function(){
    console.log("Hello user");
}
obj.greetings2 = function() {
    console.log(`Hello there ${this.name}`);
}
console.log(obj.greetings());
console.log(obj.greetings2())

let obj1 = {1:"A",2:"B",3:"C"}
let obj2 = {4:"D",5:"E",6:"F"}

let obj3 = Object.assign({},obj1,obj2)
let obj4 = {...obj1,...obj2}// spred operator
console.log(obj3);
console.log(obj4);

console.log(Object.keys(obj));
console.log(Object.values(obj));
