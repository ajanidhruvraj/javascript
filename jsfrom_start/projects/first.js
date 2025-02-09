function f1(ele){
    if (ele==='black') {        
        let body = document.querySelector('body')
        body.style.backgroundColor=ele
        body.style.color='white'
    } else if (ele==='blue') {
        let body = document.querySelector('body')
        body.style.backgroundColor=ele
        body.style.color='white'
    }
    else if (ele==='yellow') {        
        let body = document.querySelector('body')
        body.style.backgroundColor=ele
        body.style.color='black'
    } else{
        let body = document.querySelector('body')
        body.style.backgroundColor=ele
        body.style.color='black'
    }
}