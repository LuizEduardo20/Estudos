export default function Resultado(props) {
    return (
      <>
      <section>
        <p>Soma das notas: {props.somaNotas}</p>
        <p>{props.somaNotas >= 24 ? 'Aprovado' : 'Reprovado'}</p>
      </section>
      </>
    )
}