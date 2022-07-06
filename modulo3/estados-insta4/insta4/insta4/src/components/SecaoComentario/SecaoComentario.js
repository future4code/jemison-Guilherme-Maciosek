import React, { useState } from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`
export function SecaoComentario(props) {
	const [comentario, setComentario] = useState ("")
	function insereComentario(event){
		setComentario(event.target.value)
	} 

	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={comentario}
				onChange={insereComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}