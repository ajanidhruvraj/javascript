"use strict"; // treat all js code as newernversion

//alert(3+3)//wecant do this because this is node js

// number ==> 2 to power 53
// bigint
// string ==> ""
// boolean ==> true/false
// null ==> standalone value
// undefined
// symbol ==> uniqe
// object
let account4;

console.log(typeof account4);
console.log(typeof undefined);//undefine
console.log(typeof null);//object

// primitive 7
//string,number,null,boolean,undefined,symbol,BigInt

//reference type/non premetive
//Array,objects,functions

//dynamic or static ?find

//----------------------------

//stack and heap memory
//stack
let name = "asdfghjklgh"
let fname = name
//this will give copy of name to fname
//heap
let name1={
    email:"sdfghjkl",
    pass:"sdfghjkl"
}

let fname1=name1
fname1.email="dj@mail.com"
console.log(fname1.email);
console.log(name1.email);
// this will give refrence instedbof making copy