import React from 'react'
import { Quadro, Foto, TextoPerfil } from './styled'

function User(props) {
  let nome = props.user.name.first
  let sobrenome = props.user.name.last
  let title = props.user.name.title
  let imagem = props.user.picture.large
  let idade = props.user.dob.age
  let telefone = props.user.cell
  let pais = props.user.nat
  return (
    <>
    <Quadro>
      <TextoPerfil>{title} {nome} {sobrenome}</TextoPerfil>
      <Foto src={imagem} alt=""/>
      <h2>{idade}y - {telefone} - {pais}</h2>
    </Quadro>
    </>
  )
}

export default User