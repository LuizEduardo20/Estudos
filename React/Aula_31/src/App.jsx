// propriedade key

export default function App(){

  const arrayNumeros = [5, 3, 8, 9, 2] //não pode repetir numero

  function ListaNumeros(props){
    const num = props.numeros
    const lista_Numeros= num.map(numeroLista => <li key={numeroLista.id}>{numeroLista}</li>)
    return(
      <ul>{lista_Numeros}</ul>
    )
  }

  return(
    <>
    <ListaNumeros numeros={arrayNumeros}/>
    </>
  )
}