import Header from './Components/Header/Header'
import axios from 'axios'
import Match from './Components/Match/Match'
import React, { useState } from 'react'
import Perfil from './Components/Perfil/Perfil'
import { Body, Centro } from './styled'


function App() {

  const [changeScreen, setChangeScreen] = useState(true)
  const [clearProfile, setclearProfile] = useState(true)

  const changingScreen = function () {

    setChangeScreen(!changeScreen)

  }

  const clear = function (aluno) {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`)
      .then(() => {
        alert('Sem Matchs!')
        setclearProfile(!clearProfile)
      })
      .catch((erro) => {
        alert(`Erro: ${erro.message}`)
      })
  }

  let display

  switch (changeScreen) {
    case true:
      return display = 
      <Body>
        <Centro>
          <Header changeScreen={changingScreen} nameBotao={changeScreen} />
          <Perfil limparPerfil={clear} clearProfile={clearProfile} />
        </Centro>
      </Body>
    case false:
      return display = 
        <div>
          <Header changeScreen={changingScreen} />
          <Match limparPerfil={clear} clearProfile={clearProfile} />
        </div>
    default:
      break;
  }

  return (
    <div>
      {display}
    </div>
  );
}

export default App;