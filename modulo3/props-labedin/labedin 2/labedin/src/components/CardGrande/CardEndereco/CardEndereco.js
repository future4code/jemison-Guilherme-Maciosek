import React from 'react';
import './CardEndereco.css';


function CardEndereco(props) {
    return (
        <div className="cardendereco-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.endereco }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}


export default CardEndereco