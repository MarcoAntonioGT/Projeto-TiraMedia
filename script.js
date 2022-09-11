function calcular(){
    const num1 = parseFloat(document.getElementById("numero1").value)
    const num2 = parseFloat(document.getElementById("numero2").value)
    const media = (num1 + num2) /2
    const resultado = document.querySelector(".resultado")
 
    if(!media){
       alert('Calculo Inválido')
       resultado.innerHTML = ''

    }else{
        resultado.innerHTML = media
    }
} 
