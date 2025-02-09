function f1(){
    let height = parseInt(document.querySelector('#input1').value)
    let weight = parseFloat(document.querySelector('#input2').value)
    console.log(height);
    console.log(weight);
    if (height<0||weight<0||isNaN(height)||isNaN(weight)||height===''||weight==='') {
        alert("Enter Valid No.")
    }
    else{
        let bmi = (height/(Math.pow(weight,2))).toFixed(2)
        console.log(bmi)
        if (bmi<18.6) {
            let result = document.querySelector('#result')
            console.log(result);
            result.innerHTML='Under Weight'
        } else if(bmi>18.6 && bmi<24.9){
            let result = document.querySelector('#result')
            console.log(result);
            result.innerHTML='Normal Range'
        }
        else{
            let result = document.querySelector('#result')
            console.log(result);
            result.innerHTML='Over Weight'
        }
    }
    
}
