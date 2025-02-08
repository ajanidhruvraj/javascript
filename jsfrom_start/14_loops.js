console.log("for loop");

for(let i=0;i<10;i++){
    console.log(i);
}
let i=0
console.log("while loop");

while (i<10) {
    console.log(i);
    i++
}
let i1=0
console.log("do-while loop");

do{
    console.log(i1);
    i1++
}while (i1<10)

console.log("arr-loop");
let arr = [1,2,3,4,5,6,7]
for(const a of arr){
    console.log(a+1);
}

const map = new Map()

map.set('IN',"india")
map.set('US',"United State")
map.set('AUS',"Australiya")
map.set('IN',"india")

console.log(map);

for(const [key,value] of map){
    console.log(`${key} and ${value}`);
}

const obj = {
    'name':"DJ",
    'class':"EC3"
}
// for(const [key,value] of obj){// not iterable
//     console.log(`${key} and ${value}`);
// }

for (const key in obj) {// for object
    console.log(`${key} and ${obj[key]}`)
}

for (const key in arr) {// for array
    console.log(`${key} and ${arr[key]+1}`)
}
let arr1 = ['dj','pj','kj']
arr1.forEach(element => {
    console.log(element);
});

let arrayOfObject = [
    {
        LanguageName : "Java",
        Name : "Java"
    },
    {
        LanguageName : "Python",
        Name : "Py"
    },
    {
        LanguageName : "Javascript",
        Name : "Js"
    }
]

arrayOfObject.forEach(element => {
    console.log(element.LanguageName,element.Name);
})
let a = arrayOfObject.forEach(element => {// for each do not return values
    console.log(element.LanguageName,element.Name);
})

console.log(a);

let arr2 = [1,2,3,4,5,6,7,8,9,10]

let odd = arr2.filter( element => {// if use{} bracets then write return key word
    return element%2
})
console.log(odd);


let books = [
    {
        name:"Java",publishYear:"1980",author:"ASDF",price:"23$"
    },
    {
        name:"C++",publishYear:"1984",author:"AERTF",price:"25$"
    },
    {
        name:"Javascript",publishYear:"2010",author:"WEFVB",price:"32$"
    },
    {
        name:"Python",publishYear:"2011",author:"ZXCVBTF",price:"54$"
    },
    {
        name:"Javascript",publishYear:"2010",author:"WEFVB",price:"32$"
    },
    {
        name:"Python",publishYear:"2011",author:"ZXCVBTF",price:"54$"
    }
]

let name = books.filter(bk => bk.name==="Python")
let name1 = books.filter(bk => bk.publishYear>="2011")

console.log(name);
console.log(name1);

//-------chaining----------
// let an array of name arr
//let a = arr.map().map().filter() you can continue this for as many times as needed

let mynums = [1,2,3,4]


let reduce = mynums.reduce((acc,curuntval) => acc+curuntval,0)
console.log("The value is ",reduce);