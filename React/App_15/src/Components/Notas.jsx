export default function Notas(props){
    return(
        <>
        <section>
          <legend>Digite a {props.numero}° Nota</legend>
          <input type='text' name={props.name} onChange={(elemento)=>props.setNota(elemento)}/>
        </section>
        </>
    )
}