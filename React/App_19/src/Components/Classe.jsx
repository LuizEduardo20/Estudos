import { Component } from "react";

export default class Classe extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <h1>Componentes feito com Classe</h1>
                <p>Estudos: {this.props.estudos}</p>
                <p>Cidade: {this.props.cidade}</p>
            </>
        )
    }
}