import { Component } from "react";

export default class Carro extends Component{

    constructor(props){
        super(props)
        // forma para criar variavel em componente de classe
        this.modelo = 'M8'
        // criar e usar state em componente de classe
        this.state = {
            ligado: false,
            velAtual: 0
        }
    }

    ligar_Desligar(){
        this.setState(
            (state) => (
                {ligado: !state.ligado}
            )
        )

        //função tradicional
        // this.setState(
        //     function(state){
        //         return {ligado: !state.ligado}
        //     }
        // )
    }

    acelerar(){
        this.setState(
            // {velAtual:this.state.velAtual + this.props.fator}, em situações de calculo pode dar problema
            (state, props) => (
                {velAtual:state.velAtual + props.fator}
            )
        )
    }

    render(){
        return(
            <>
            <h1>Carros Rapidos</h1>
            <p>Modelo: {this.modelo}</p>
            <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
            <p>Vel. Atual: {this.state.velAtual}</p>
            <button onClick={() => this.ligar_Desligar()}>
                {this.state.ligado ? 'Desligar motor' : 'Ligar motor'}</button>
            <button onClick={() => this.acelerar()}>Acelerar</button>
            </>
        )
    }
}