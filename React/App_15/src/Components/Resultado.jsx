export default function Notas(props){
    return(
        <>
        <h2>O total das notas é {props.somaNotas}</h2>
        <h3>{props.somaNotas >= 24 ? 'Aprovado' : 'Reprovado'}</h3>
        </>
    )
}