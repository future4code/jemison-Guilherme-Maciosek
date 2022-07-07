import React, { useState } from 'react'
import { DisplayStyle } from "./displayStyle";
import { CaixaInput } from './displayStyle';
import { CaixaDeMensagem} from './displayStyle'

function DisplayLabenu () {
    const [inputNome, setInputNome] = useState ("")
    const [InputMensagem, setInputMensagem] = useState ("")
    const [inputMensagemFinal, setInputMensagemFinal] = useState([""])

    const addMensagem = (e) => {
        e.preventDefault();
    
        const novaMensagem = {inputNome, InputMensagem}
        const mensagemFinalnoDisplay = [...inputMensagemFinal, novaMensagem]
        setInputMensagemFinal(mensagemFinalnoDisplay)
    }
    
    const mensagemExibida = inputMensagemFinal.map (() => {
    
        return inputMensagemFinal
    })


    const insereNome = (e) => {
		setInputNome(e.target.value)
    }

    const insereMensagem= (e) => {
		setInputMensagem(e.target.value)
    }
    return (
    <div>

        <DisplayStyle>
            <CaixaInput>
                <label> Remetente: </label>
                <input 
                    placeholder='Insira seu Nome'
                    size="20"
                    onChange={insereNome} 
                    value={inputNome}>
                </input>
                
                <label> Mensagem: </label>
                <input 
                    placeholder='Mensagem' 
                    size="30" 
                    onChange={insereMensagem} 
                    value={InputMensagem}>
                </input>
                
                <button onClick={addMensagem}>Enviar Mensagem</button>    
         
            </CaixaInput>

            
        </DisplayStyle>
        <CaixaDeMensagem>
                {mensagemExibida}
            </CaixaDeMensagem> 
                    </div>
        
    )    
}

export default DisplayLabenu;