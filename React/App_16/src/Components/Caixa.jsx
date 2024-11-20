export default function Caixa(props){
    return(
      <>
        <h1>Ferrari</h1>
        <p>{props.Site}</p>
        {/* retorna os elementos de caixa todos os elementos filhos */}
        {props.children}
        {/* retorna o elemento filho da posição 0 ou 1, depende de qual posição você qué */}
        {props.children[0]}
      </>
    )
}