import React from 'react'
import { useState } from 'react'
import VariaveisES from './VariaveisES';
import VariaveisEM from './VariaveisEM';
import Home from './Home';

function AlternarPagina () {
    const [paginaAtual, setPaginaAtual] = useState (false);
    const selecionarPagina = () => {
        setPaginaAtual(!paginaAtual)
    }

    if(paginaAtual) {
        return <VariaveisES changePage={selecionarPagina} />
    } else {
        return <Home changePage={selecionarPagina} />
    }
}

export default AlternarPagina