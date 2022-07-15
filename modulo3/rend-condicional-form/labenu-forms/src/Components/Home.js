import React from 'react'
import { useState } from 'react'
import VariaveisES from './VariaveisES';
import VariaveisEM from './VariaveisEM';
import AlternarPagina from './AlterarPagina';



function Home (props) {
    const {selecionarPagina} = props 
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

   const teste = () => {
      setGrauEscolaridade('Ensino Medio Incompleto')
   }
   const HandleGrauEMC =() => {
      setGrauEscolaridade('Ensino Medio Completo')
   }

   const HandleGrauESI =() => {
      setGrauEscolaridade('Ensino Superior Incompleto')
   }
   const HandleGrauESC =() => {
      setGrauEscolaridade('Ensino Superior Completo')
   }


// Fim Eventos de Atualização de estado

const navigation = () => {
   switch(grauEscolaridade) {
      case 'Ensino Médio Incompleto':
         return <VariaveisEM />
         break;
      case 'Ensino Médio Completo':
         return <VariaveisEM />
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
               <select onChange={teste}>
                  <option value='empty'></option>
                  <option value='Ensino Médio Incompleto'>Ensino Médio Incompleto</option>
                  <option value='Ensino Médio Completo'>Ensino Médio Completo</option>
                  <option value='Ensino Superior Incompleto'>Ensino Superior Incompleto</option>
                  <option value='Ensino Superior Completo'>Ensino Superior Completo</option>
                  {navigation()}
               </select>
                  </p> 
                  
               </ul>
            
            </p>
        </section>
    )
}


export default Home