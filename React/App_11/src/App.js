//Listas com o método Map

export default function App(){

  // const carros = ['FXXK', 'MK7', 'SVJ' , 'CHIRON', 'JESKO']
  // const listaCarros = carros.map((elemento, indice) => //não usa chaves {} como no javascript puro
  //   // <p>{elemento}</p>
  //   <li key = {elemento.id}>{indice} - {elemento}</li>
  // )

  const carros = [
    {categoria: 'Esportivo', preco: '3.000.000.00', modelo: 'Chiron'},
    {categoria: 'Off-Road', preco: '670.000.00', modelo: 'Raptor'},
    {categoria: 'Drift', preco: '400.000.00', modelo: 'S15'},
    {categoria: 'Passeio', preco: '90.000', modelo: 'Gran Siena'},
    {categoria: 'Familia', preco: '1.000.000.00', modelo: 'RS6'},
  ]

  const listaCarros = carros.map((elemento) =>
    //usando 'id' funciona melhor do que 'indice'
    <li key={elemento.id}> 
      {elemento.categoria}: 
      {elemento.modelo} = 
      R${elemento.preco}
    </li>
  )

  return(
    <>
    {listaCarros}
    </>
  )
}