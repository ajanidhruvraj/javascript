//if-else
let a=12
if(a<2){
    console.log("if executed");
    
}
else if (a==12) {
    console.log("else if executed");
    
}
else{
    console.log("else executed");
    
}
// === chack condition with data types
let key = 10
switch (key) {
    case 1:
        console.log("jan");
        break;
    case 10:
        console.log("oct");
        break;
    default:
        console.log("not valid");
        break;
}

// truthy value
// "0"," ",'false,[],{},function(){}

//flasy value
//0,-0,nan,undefined,null,bigint,""

let a1
a1 = 5??10
console.log(a1);
a1 = null??10
console.log(a1);
a1 = 10??undefined??5
console.log(a1);

// ternary operator

let num=10
num>100?console.log("greater"):console.log("less")