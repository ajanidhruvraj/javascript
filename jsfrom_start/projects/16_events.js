document.getElementById('list1').addEventListener('click',function(e){
    console.log(e);
})

//type, timestamp, defaultPrevented, target, toElement, srcElement
//currentTarget, clientX, clientY, screenX, screenY, altKey
//keyCode, shiftKey

let li = document.querySelectorAll('li')
console.log(li);
li.forEach((e)=>{
    e.addEventListener('click',function(e){
        let remove = e.target.tagName
        console.log(remove);
        if(remove==='BUTTON'){
            console.log(e.target.parentNode);
            let removeIt = e.target.parentNode// deleting the parent node of button which is li
            removeIt.remove()
        }
    })
})
