import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const [curtidaValue,setCurtidaValue]= useState(0)
const [comentarioValue, setComentarioValue]= useState(0)
const [enviarComentario, setEnviarComentario]= useState(0)

const Post = (props) => {

 
  const onClickCurtida = (e) => {
    setCurtidaValue(e.target.value)

  };

  const onClickComentario = (event) => {
    setComentarioValue(event.target.value)
  };

  const enviarComentario = (comentario) => {
    setEnviarComentario(comentario.target.setComentarioValue)
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          value={curtidaValue}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          value={comentarioValue}
          onClickIcone={onClickComentario}

          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post