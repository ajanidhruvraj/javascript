let arr = [1,2,3,4,5,6,7,true,"Dhruvraj"]// we can store any value
let myarr = [1,2,3,4,5,6,7,8]

console.log(myarr[4]);
console.log(myarr.length);// no brackets

myarr.push(2)
myarr.push(3)
myarr.pop()

myarr.unshift(7)
console.log(myarr);
myarr.shift(7)
console.log(myarr);
console.log(myarr.indexOf(5));
console.log(myarr.includes(4));

// slice/splice

const newArry = new Array(1,2,3,4,5,6);
console.log("original array "+newArry);
const nAr = newArry.slice(1,3)//from 1 to index 2
console.log("sliced array "+nAr);
console.log("original array "+newArry);
const nAr2 = newArry.splice(1,3)//from 1 to index 3 with changing original array
console.log("spliced array "+nAr2);
console.log("original array "+newArry);


//Array part 2

let array = new Array("dj","kj","pj","mj")
let narray = new Array(1,2,3,4,5,6)

array.push(narray);
console.log(array);
console.log(array[4][3]);

console.log(array.concat(narray));
console.log(array.concat(narray).flat(Infinity));
console.log(array.flat(Infinity));

console.log(Array.from("Dhruvraj"));
console.log(Array.isArray("Dhruvraj"));
console.log(Array.from({name: "Dhruvraj"}));// interview

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));