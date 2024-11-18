import { useState } from 'react'

//usando somente um state para manipular varios objetos

export default function App(){

  const [formulario, setformulario] = useState({'nome': '','email': '', 'senha': ''})
  const handlFormChange = (elemento) => {
    if(elemento.target.getAttribute('name') == 'nnome'){
      setformulario({'nome': elemento.target.value, 'email': formulario.email, 'senha': formulario.senha})
    } else if(elemento.target.getAttribute('name') == 'eemail'){
      setformulario({'nome': formulario.nome, 'email': elemento.target.value, 'senha': formulario.senha})
    } else{
      setformulario({'nome': formulario.nome, 'email': formulario.email, 'senha': elemento.target.value})
    }
  }

  return(
    <>
    <label>Nome: </label>
    <input type='text' name='nnome' value={formulario.nome} onChange={(e) => handlFormChange(e)}/><br/>
    <label>Email: </label>
    <input type='email' name='eemail' value={formulario.email} onChange={(e) => handlFormChange(e)}/><br/>
    <label>Senha: </label>
    <input type='password' name='ppassword' value={formulario.senha} onChange={(e) => handlFormChange(e)}/><br/>
    <h2>Seu Nome é: {formulario.nome}</h2>
    <h2>Seu Email é: {formulario.email}</h2>
    <h2>Sua Senha é: {formulario.senha}</h2>
    </>
  )
}