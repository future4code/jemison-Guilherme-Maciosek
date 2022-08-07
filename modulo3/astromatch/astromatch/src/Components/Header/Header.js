import React, { useState, useEffect } from 'react'
import { Container, ClickButton, Topo } from './styled'

function Header(props) {

    const [botao, setBotao] = useState(true)

    useEffect(() => {
        setBotao(props.nameBotao)
    }, [props.nameBotao])

    return (
        <Container>
            <Topo>AstroMatch</Topo>
            <ClickButton onClick={props.changeScreen}>{botao ? 'Matches' : 'Encontre alguém!'}</ClickButton>
        </Container>
    )
}

export default Header