import axios from "axios";
import React from "react";
import { useForm } from "../hooks/useForm";
import { urlLoginPage } from "../url/url";

function LoginPage () {
    const [body, onChange, clear] = useForm({
        login: "",
        password: "",
    })

    const effLogin = (e)=>{
        e.preventDefault();
        axios
            .post(`${urlLoginPage}darvas/login`, body)
            .then((response) =>{
                console.log(response.data);
            })
            .catch((error)=>{
                console.log("deu erro");
            })
        clear();
    }    
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={effLogin}></form>
            <input 
                type="text"
                name="login"
                placeholder="Insira seu login"
                value={body.login}
                onChange={onChange}
                required
            />
                <input 
                type="password"
                name="password"
                placeholder="Insira sua senha"
                value={body.password}
                onChange={onChange}
                required
            />
            <button>Logar</button>
        </div>
    )
}

export default LoginPage