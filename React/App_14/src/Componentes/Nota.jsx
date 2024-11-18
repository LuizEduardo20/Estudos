export default function Nota(props) {
    return (
        <>
        <section>
          <legend>Informe a nota: {props.numero}</legend>
          <input type='text' value={props.nota} onChange={(elemento) => props.setNota(elemento.target.value)}/>
        </section>
        </>
    )
}