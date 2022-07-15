import React, { useState } from 'react'
import { Chat, DisplayStyle, CaixaInput } from "./displayStyle";




function DisplayLabenu () {
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [mensagemExibida, setMensagemExibida] = useState([{nomeRemetente: '', mensagemRemetente: ''}])

    const publicarMensagem = (e) => {
        e.preventDefault()
        const novaMensagemUsuario = {nomeRemetente: nome, mensagemRemetente: mensagem}
        setMensagemExibida ([...mensagemExibida, novaMensagemUsuario])
    }

	const insereNome = (e) => {
		setNome(e.target.value)
    }
    const insereMensagem = (e) => {
		setMensagem(e.target.value)
    }

    const mensagemNoDisplay = mensagemExibida.map((display, index) => {
        return (
            <Chat key={index}>{display.nomeRemetente} {display.mensagemRemetente}</Chat>
        )
    })

    return (
        
        <DisplayStyle> 
            <Chat>
                {mensagemNoDisplay}
            </Chat>            
                <CaixaInput>
                    <label> Remetente: </label>
                        <input 
                            placeholder='Seu nome'
                            value={nome} 
                            onChange={insereNome}    
                            />
                    <label> Mensagem: </label>
                        <input 
                            name="Mensagem" 
                            value={mensagem}
                            onChange={insereMensagem} 
                            /> 

                        <button onClick={publicarMensagem}>Enviar Mensagem</button>
                    </CaixaInput>
        </DisplayStyle>
    )    
}

export default DisplayLabenu;