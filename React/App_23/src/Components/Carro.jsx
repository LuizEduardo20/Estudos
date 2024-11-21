import { Component } from "react";

export default class Carro extends Component{

    constructor(props){
        super(props)
        this.modelo = 'M8'
        this.state = {
            ligado: false,
            velAtual: 0
        }

        this.ld = this.ligar_Desligar.bind(this)
    }

    ligar_Desligar(){
        this.setState(
            (state) => (
                {ligado: !state.ligado}
            )
        )
    }

    acelerar(){
        this.setState(
            (state, props) => (
                {velAtual:state.velAtual + props.fator}
            )
        )
    }

    componentDidMount(){
        console.log('O componente Carro foi criado e carregado')
    }

    componentDidUpdate(){
        console.log('O Componente Carro foi atualizado')
    }

    componentWillUnmount(){
        console.log('O Componente Carro foi retirado')
    }

    render(){
        return(
            <>
            <h1>Carros Rapidos</h1>
            <p>Modelo: {this.modelo}</p>
            <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
            <p>Vel. Atual: {this.state.velAtual}</p>
            <button onClick={this.ld}>
                {this.state.ligado ? 'Desligar motor' : 'Ligar motor'}</button>
            <button onClick={() => this.acelerar()}>Acelerar</button>
            </>
        )
    }
}