//importação da classe fornecedor
import Fornecedor from './Fornecedor.js'
import FornecedorPessoa from './FornecedorPessoa.js'

//criação do objeto
const fornecedor=new Fornecedor("Gabys", "(00)-0000-0000")

console.log(`Dados do Fornecedor:
Nome:${fornecedor.getNome()}
Fone:${fornecedor.getFone()}`)

//criação de um objeto para trabalhar com FornecedorPessoa
const fornecedorPessoa=new FornecedorPessoa("Gabys", "(00)-0000-0000", "12.165.789-6", "123.456.789-89")
console.log(`Dados do Fornecedor Pessoa:
Nome:${fornecedorPessoa.getNome()}
Fone:${fornecedorPessoa.getFone()}
Rg:${fornecedorPessoa.getRg()}
Cpf:${fornecedorPessoa.getCpf()}`)

