// objetos, p2

class Carro{
    estudos = 'JS'
    constructor(primeiro_nome, tipo){
        this.nome = primeiro_nome
        this.estudos = 'youtube' //altera o valor da variavel
        if(tipo === 1){
            this.tipo = ' Carro esportivo'
            this.velocidade = 490

        } else if(tipo == 2){
            this.tipo = 'Carro Utilitário'
            this.velocidade = 80

        } else if(tipo == 3){
            this.tipo = 'Carro de Passeio'
            this.velocidade = 60

        } else{
            this.tipo = 'JDM'
            this.velocidade = 70

        }
    }
    getNome(){
        return this.nome
    }

    getTipo(){
        this.tipo
    }

    getVelocidade(){
        this.velocidade
    }

    getInfo(){
        return [this.nome, this.tipo, this.velocidade]
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelocidade(velocidade){
        this.velocidade = velocidade
    }
    info(){ //metodo para retorna todas as propriedade, nome do metodo 'info'
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade: ${this.velocidade}`)
        console.log(`Estudos: ${this.estudos}`)
        console.log('--------------------')
    }
}

let c1 = new Carro(1, 'Carro corrida')
let c2 = new Carro(2, 'Transporte de carga')
let c3 = new Carro(3, 'Carro de familia')
let c4 = new Carro(4, 'Japonês')

c1.setNome('Super veloz') //altera o valor das propriedades: nome e velocidade
c1.setVelocidade(100)

c1.info()
// c2.info()
// console.log(c1.getInfo())