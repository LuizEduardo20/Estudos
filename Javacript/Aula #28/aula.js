//operador THIS

function aluno(nome, nota){
    this.nome = nome //a função (This), faz referencia a um parametro dentro da variavel
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){//(setTimeout)gera um atraso na função
            //this.nome = 'M'
            //this.nota = 10
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

    this.dados_arrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const aluno1 = new aluno('Luiz', 200)
aluno1.dados_anonimo()
aluno1.dados_arrow()