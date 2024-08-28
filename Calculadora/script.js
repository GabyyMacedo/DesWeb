function calcularSoma(a,b) {
    return a+b
}

function mostrarSoma() {
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let resultado=calcularSoma(num1,num2);
    document.getElementById("resultado").textContent="Resultado: "+resultado;
}