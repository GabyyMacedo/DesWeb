//criação da classe
class Fornecedor{
    //ciação do método contrutor
    constructor (nome="Gabys", fone="(00)-0000-0000"){
        this.nome=nome
        this.fone=fone
    }

    //criação dos métodos setters
    setNome(nome){
        this.nome=nome
    }

    setFone(fone){
        this.fone=fone
    }

    //criação dos getters
    getNome(){
        return this.nome
    }

    getFone(){
        return this.fone
    }
}

export default Fornecedor