import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Imagem } from './styled'
import { ClickButton } from '../Header/styled'

function Match(props) {

  const [perfil, setPerfil] = useState([])

  useEffect(() => {
    getMatches('guilherme-maciosek-jemison')
  }, [props.setupdateProfile])

  const getMatches = function (aluno) {

    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`)
      .then((response) => {
        setPerfil(response.data.matches)
      }).catch((erro) => {
        alert(`Erro: ${erro.message}`)
      })
  }

  return (
    <Container>
      {perfil.map((match, index) => {
        return <div key={index}>
          <Imagem src={match.photo} alt={match.photo_alt} />
          <p>{match.name}</p>
        </div>
      })}


      <ClickButton onClick={() => props.limparPerfil('guilherme-maciosek-jemison')}>Limpar Matchs</ClickButton>
    </Container>
  )
}

export default Match