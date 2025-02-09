let a = document.getElementById('blackbox')
console.log(a);

a.style.backgroundColor = 'blue'

let heading =document.getElementById('h1tag').innerText// it will give the text which is only visible
let heading1 =document.getElementById('h1tag').textContent// it gives all the text content
let heading2 =document.getElementById('h1tag').innerHTML// it gives all the text content with html tags
console.log(heading);
console.log(heading1);
console.log(heading2);

document.querySelector('h1')//it will give 1st h1 tag
//querySelectorAll

let myul = document.querySelector('ul')
console.log(myul);

let li1 = myul.querySelector('li')
console.log(li1);

li1.style.backgroundColor = 'green'
li1.style.padding = '10px'
li1.innerHTML = 'four'

//nodeList is not exactly arrayList

let allli = myul.querySelectorAll('li')
console.log(allli);

allli[0].style.color='aqua'
allli[1].style.color='black'
allli[1].innerHTML = '2'
allli[2].style.color='red'

let h1div = document.querySelectorAll('h1')
console.log(h1div);

h1div[4].style.backgroundColor='red'
h1div[2].style.backgroundColor='black'

h1div.forEach(ele => {
    ele.style.backgroundColor='white'
    ele.style.color='black'
    ele.style.padding='5px'
})

let arrofh1=Array.from(h1div)//converintg into array
console.log(arrofh1);

let parent = document.querySelector('.parent')
// console.log(parent.children[1].innerHTML); // it will work corectly

// parent.children.forEach(ele => {
//     ele.style.backgroundColor='white'
//     ele.style.color='black'
//     ele.style.padding='20px'
// })//this is not possible


for (let i = 0; i < parent.children.length; i++) {
        console.log(parent.children[i].innerHTML);
        parent.children[i].style.backgroundColor='white'
        parent.children[i].style.color='black'
        parent.children[i].style.padding='20px'
}
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

let day = document.querySelector('#day')
console.log(day);
console.log(day.parentElement);//it will not work on querySelectorAll
console.log(day.nextElementSibling);
console.log("node",parent.childNodes);


let div = document.createElement('div')
console.log(div);
div.className='id1'
div.id=Math.round(Math.random()*10+1)
div.setAttribute("Tittle","Hello there")
div.style.backgroundColor='yellow'
div.style.color='black'
div.style.padding='10px'
let text = document.createTextNode("Hi there")
div.appendChild(text)

document.body.appendChild(div)

function addListEle(ele) {
    let li = document.createElement('li');
    li.innerHTML=`${ele}`
    document.querySelector('ul').appendChild(li)
}
//optimal way
function addoptimalway(ele) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(ele))
    document.querySelector('ul').appendChild(li)
}
addListEle("Five")
addoptimalway("Six")
//edit
const secLan = document.querySelector("li:nth-child(2)")
console.log(secLan);
let newli = document.createElement('li')
newli.textContent='Two'
secLan.replaceWith(newli)

//edit
const firstland = document.querySelector("li:nth-child(2)")
firstland.outerHTML = '<li>TWO</li>'

//remove
const lastland = document.querySelector("li:last-child")
lastland.remove()