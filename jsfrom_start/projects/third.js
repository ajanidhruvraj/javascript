let clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    let date1 = date.getHours+1
    clock.innerText=date.toLocaleTimeString()    
    clock.style.color='white'
},1000);