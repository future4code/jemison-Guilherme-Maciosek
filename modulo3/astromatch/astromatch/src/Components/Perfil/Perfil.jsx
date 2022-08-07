import React, { useState, useEffect } from 'react'
import { Container, Imagem, ImgBotao, DivBotoes } from './styled.js'
import axios from 'axios'
import Coracao from '../../Imagem/Coracao.png'
import IconeX from '../../Imagem/X.png'
import { ClickButton } from '../Header/styled'

function Perfil(props) {

    const [updateProfile, setupdateProfile] = useState(true)
    const [perfil, setPerfil] = useState({})
    const [perfilID, setPerfilID] = useState('')



    useEffect(() => {
        getProfileToChoose('guilherme-maciosek-jemison')
    }, [updateProfile, props.setupdateProfile])


    const choosePerson = function (aluno, choice) {

        const body = {
            'id': perfilID,
            'choice': choice
        }

        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body)
            .then((respota) => {
                if (choice) {

                    if (respota.data.isMatch) {
                        setupdateProfile(!updateProfile)
                    } else {
                        setupdateProfile(!updateProfile)
                    }
                } else {
                    setupdateProfile(!updateProfile)
                }
            }).catch((erro) => {
                alert(`Erro: ${erro.message}`)
            })
    }

    const getProfileToChoose = function (aluno) {

        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`)
            .then((respota) => {
                setPerfil(respota.data.profile)
                setPerfilID(respota.data.profile.id)
            })
            .catch(erro => {
                alert(`Erro: ${erro.message}`)
            })
    }



    const displayProfiles = perfil ? (
    <div>        
        <Imagem src={perfil.photo} alt={perfil.photo_alt} />
        <p>{perfil.name}, {perfil.age} anos de idade.</p>
        <p>Bio:{perfil.bio}</p>
        <DivBotoes>
            <ClickButton onClick={() => choosePerson('guilherme-maciosek-jemison', true)}><ImgBotao src={Coracao} alt={'Icone Coração'} /></ClickButton>
            <ClickButton onClick={() => choosePerson('guilherme-maciosek-jemison', false)}><ImgBotao src={IconeX} alt={'Icone X'} /></ClickButton>
        </DivBotoes>
    </div>) 
    : (
        <div>
            <h5>Sem novos usuários.</h5>
            <ClickButton onClick={() => props.limparPerfil('guilherme-maciosek-jemison')}>Limpar Perfil</ClickButton>
        </div>
    )

    return (
        <Container>
            {displayProfiles}
        </Container>
    )
}

export default Perfil