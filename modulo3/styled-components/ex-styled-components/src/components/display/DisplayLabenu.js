import React, { useState } from 'react'
import { DisplayStyle } from "./displayStyle";
import { CaixaInput } from './displayStyle';



function DisplayLabenu () {
    const [nome, setNome] = useState ("")
    const [mensagem, setMensagem] = useState ("")
	function insereNome(event){
		setNome(event.target.value)
    }
    function insereMensagem(event){
		setMensagem(event.target.value)
    }
    return (
        <DisplayStyle>
            <CaixaInput>
                <label for="nome"> Remetente: </label>
                <input name="Nome" size="20" onChange={insereNome} value={nome}></input>
                <label for="mensagem"> Mensagem: </label>
                <input name="Mensagem" size="30" onChange={insereMensagem} value={mensagem}></input> <button>Enviar Mensagem</button>
            </CaixaInput>
        </DisplayStyle>
    )    
}

export default DisplayLabenu;