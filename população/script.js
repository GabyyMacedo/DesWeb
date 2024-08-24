console.log("Script Carregado")

function calcularAnos() {
    console.log("botão de Calcular clicando")
    let popAInput = document.getElementById("popA").value.trim()
    let taxaAInput = document.getElementById("taxaA").value.trim()
    let popBInput = document.getElementById("popB").value.trim()
    let taxaBInput = document.getElementById("taxaB").value.trim()

    if(popAInput ==="" || taxaAInput ==="" || popBInput ==="" || taxaBInput ===""){
        alert("Por favor, preencha todos os campos")
        return
    }
}

let popA = parseInt("popAInput")

let taxaA = parseFloat("taxaAInput")/100

let popB = parseInt("popBInput")

let taxaB = parseFloat("taxaBInput")/100

let anos = 0

while (popA < popB){
    popA *= (1 + taxaA) 
    popB *= (1 + taxaB)
    anos++ 


console.log(" O número de anos calculados foi: ", anos)

let resultado = document.getElementById("resultado")

resultado.innerHTML = `Serão necessarios ${anos} anos para que a populaçaõ do pais A ultrapsse ou iguale a população do pais B`

}

function limparCampos(){
    console.log("Botão de limpar campos")

    document.getElementById("popA").value = ""
    document.getElementById("taxaA").value = ""
    document.getElementById("popB").value = ""
    document.getElementById("taxaB").value = ""

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = " ";

}

//PESQUISA INNERHTML
//pode ser usado para receber o conteúdo 
//de um elemento HTML ou para definir um novo conteúdo para ele.
