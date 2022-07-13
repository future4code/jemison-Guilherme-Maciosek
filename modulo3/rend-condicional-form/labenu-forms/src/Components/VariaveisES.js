import React from 'react'
import { useState } from 'react'




function VariaveisES () {

    const [nomeUsuario, setNomeUsuario] = useState ('')
    const [idadeUsuario, setIdadeUsuario] = useState ()
    const [emailUsuario, setemailUsuario] = useState ('')
    const [grauEscolaridade, setGrauEscolaridade] = useState ('')


// Eventos de Atualização de estado
   const HandleNomeUsuario = (e) => {
      setNomeUsuario(e.target.value)
   }

   const HandleIdadeUsuario = (e) => {
      setIdadeUsuario(e.target.value)
   }

   const HandleEmailUsuario = (e) => {
      setemailUsuario(e.target.value)
   }

   const HandleGrauEM =(e) => {
      setGrauEscolaridade(e.target.value)
   }

   const HandleGrauES =() => {
      setGrauEscolaridade('Ensino Superior Incompleto')
   }


// Fim Eventos de Atualização de estado

const navigation = () => {
   switch(grauEscolaridade) {
      case 'Ensino Médio Incompleto':
         break;
      case 'Ensino Médio Completo':
         break;   
      case 'Ensino Superior Incompleto':
         return <VariaveisES />
         break;   
     case 'Ensino Superior Completo':
         return <VariaveisES />
         break;
      default:
         break   
   }
}

    return (
        <section>
            <p>    
               <label>Seu Nome: </label>
                  <input 
                     placeholder='Nome completo' 
                     onChange={HandleNomeUsuario} 
                     value={nomeUsuario}>
                  </input>
            </p>
            <p>    
               <label>Sua Idade: </label>
                  <input 
                     placeholder='Sua idade'
                     onChange={HandleIdadeUsuario} 
                     value={idadeUsuario}>                        
                  </input>
            </p>
            <p>    
               <label>Seu Email: </label>
                  <input 
                     placeholder='Seu email'
                     onChange={HandleEmailUsuario} 
                     value={emailUsuario}>                        
                  </input>
            </p>
            <p>    
               <ul>
                  <p>
               <select name='Grau de escolaridade'>
                  <option value='empty'></option>
                  <option onSelect={HandleGrauEM}value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                  <option onSelect={HandleGrauEM}value='Ensino Médio Completo'>Ensino Médio Completo</option>
                  <option onSelect={HandleGrauES} value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                  <option onSelect={HandleGrauES} value='Ensino Superior Completo'>Ensino Superior Completo</option>
                  {navigation()}
               </select>
                  </p> 
                  <input
                    placeholder='Qual o curso?'>
               </input>
               </ul>
            
            </p>
        </section>
    )
}


export default VariaveisES