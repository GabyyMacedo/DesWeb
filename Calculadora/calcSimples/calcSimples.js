function calculadora(num1, num2, op){

    switch(op){
        case 'adicao':
            console.log(num1+num2)
            break
        case 'subtracao':
            console.log(num1-num2)
            break
        case 'divisao':
            console.log(num1/num2)
            break
        case 'multiplicacao':
            console.log(num1*num2)
            break
        default:
            console.log('Operação inválida.')
    }

}

calculadora(23, 3, 'adicao');
calculadora(23, 3, 'subtracao');
calculadora(8, 12, 'divisao'); //RESPOSTA
calculadora(3, 3, 'multiplicacao');
calculadora(3, 3, 'aaaa');
