import Globaiss from './Globais'

export default function Info() {
  return (
    <>
    <p>{`Estudos: ${Globaiss.estudo}`}</p>
    <p>{`Ano: ${Globaiss.ano}`}</p>
    <p>{`Onde: ${Globaiss.onde}`}</p>
    </>
  )
}