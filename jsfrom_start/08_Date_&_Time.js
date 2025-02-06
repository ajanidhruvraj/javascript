// begins from 1 jan 1970
let myDate = new Date() // object type
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getTime());
console.log(typeof myDate);

let myDateCreatted = new Date(2004,3,12)
console.log(myDateCreatted.toDateString());

newDate.toLocaleString('default',{
    weekday:"long",
})