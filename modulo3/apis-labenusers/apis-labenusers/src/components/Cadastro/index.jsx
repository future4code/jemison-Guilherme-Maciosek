import React, { useEffect, useState } from "react";
import axios from "axios";

function TelaCadastro() {

//Estados
    const [allUser, setAllUser] = useState ([])    
    const [createUser, setCreateUser] = useState ("")
    const [createEmail, setCreateEmail] = useState ("")

    const handleCreateUser = (e) => {
        setCreateUser(e.target.value)
    }
    const handleCreateEmail = (e) => {
        setCreateEmail(e.target.value)
    }

    const renderAllUser = allUser.map((user, index) => {
        return (
            <h1 key={index}>
                {user.name}
                <button> X </button>
            </h1>
        )
    })  
    


// Retorno tela

useEffect (() => {
    getAllUsers()
}, [])    

    
//Váriaveis API    
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const urlCreateUser = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": 'guilherme-maciosek-jemison'
        }
    }

    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => {setAllUser(response.data)})
        .catch((error) => {console.log(error.response)})
    }


const body = {
    "name": createUser,
    "email": createEmail
}

const CreateUser = (e) => {
    e.preventDefault();

    axios.post(urlCreateUser, body, serviceHeaders)
    .then((response) => {
        alert("Deu boa")
        getAllUsers()
    })
    .catch((error) => {
        alert("Deu ruim")
    })
    
    setCreateUser("")

}
    return (
        <div>
            <div>
                <h6>{renderAllUser}</h6>
            </div>
            <h1>Cadastrar Usuário</h1>
            <input
                type="text"
                placeholder="insira o nome do usuário"
                onChange={handleCreateUser}
            />
            <input
                type="text"
                placeholder="insira o seu email"
                onChange={handleCreateEmail}
            />            
            <button onClick={CreateUser}>
                Cadastrar Usuário
            </button>
            

        </div>
    )
}

export default TelaCadastro