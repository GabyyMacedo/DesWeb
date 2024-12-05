//importação da classe fornecedor
import Fornecedor from './Fornecedor.js'

//criação da classe
class FornecedorPessoa extends Fornecedor{ //extends -> interliga as duas classes (FornecedorPessoa e Fornecedor)
    //ciação do método contrutor
    constructor (nome="Gabys", fone="(00)-0000-0000", rg="12.135.743-6", cpf="123.456.789-89"){
        super(nome,fone)
        this.rg=rg
        this.cpf=cpf
    }

    //criação dos métodos setters
    setRg(rg){
        this.rg=rg
    }

    setCpf(cpf){
        this.cpf=cpf
    }

    //criação dos getters
    getRg(){
        return this.rg
    }

    getCpf(){
        return this.cpf

    }
}

export default FornecedorPessoa