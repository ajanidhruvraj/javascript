if(true){
    // let num1=10 // it is local scope
    var num2=20
    // const num3=30 // it is local scope
}

console.log(num2);

// neste scope

function one(){
    const a1=10
    function two(){
        const a2=11
        console.log(a1);
    }
    // console.log(a2);
    two()
}
one()

let name = function name(Name){
    console.log(`my name is ${Name}`);
}
name("Dhruvraj")

console.log(this);//in windows the global object is window

function one(){
    name:"Dj"
    console.log(this.name);//only inside object not in function
    // console.log(this);
}
one()

let one1={
    name:"Dj",
    message: function() {// function inside object
        console.log(`${this.name}`)   
    }    
}
one1.message()
one1.name="DJA"
one1.message()

//---------arrow function-----------

let add = (num1,num2) =>{
    return num1+num2
}
let addtwo = (num1,num2) => num1+num2
console.log(add(1,2))
console.log(addtwo(2,4));

let obj = () => ({name:"This is how object is defined in arrow function"})
console.log(obj());

// imnediately invoked function
//imp for interview

(function one1(){
    //named IIFE
    console.log("Hello world");
})();// ; is required

(() => {
    //without named IIFE
    console.log("hello world");
})();// ; is required