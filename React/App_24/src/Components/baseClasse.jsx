import { Component } from "react";

export default class BaseClasse extends Component{
    constructor(props){
        super(props) // vai permitir o uso de props

        // vai permitir o uso de states e setStates
        this.state={
            estudos: 'React',
            ano: '2024',
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status=this.props.status

        // bindagem
        let ativardesativar= this.ativarDesativar.bind(this) //faz a msm coisa que o 'ativarDesativar'
    }

    //função para manipular states
    // Dessa forma é mais seguro
    ativarDesativar(){
        this.setState(
            state => ({
                ativo: !state.ativo
            })
        )
    }

    componentDidMount(){
        console.log('O componente foi criado')
    }

    componentDidUpdate(){
        console.log('o componente foi atualizado')
    }

    componentWillUnmount(){
        console.log('o componente foi removido')
    }

    render(){
        return(
            <>
            <h1>Componente de classe</h1>
            {/* Chama a função com bind */}
            <button onClick={this.ativardesativar}>Ativar/Desativar</button>
            {/* Chama a função quando não esta usando o bind */}
            <button onClick={() => this.ativardesativar}>Ativar/Desativar</button>
            </>
        )
    }
}