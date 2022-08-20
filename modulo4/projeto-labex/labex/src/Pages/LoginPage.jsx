import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";


function LoginPage () {

    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ email: "", password: "" })


    const fazerLogin = (event) => {
        event.preventDefault() //evita que a página seja renderizada novamente ao enviar o formulário

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
            form)
            .then(response => {
                localStorage.setItem("token", response.data.token)
                navigate("/lista-de-viagens")
            })
            .catch((error) => console.log(error.message))

        clear();

    }

    return (
        <div>
            <h1> Login - com tag form e hook useForm</h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email"> Email: </label>
                <input
                    name="email" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="email" //colocar igual ao htmlFor do label
                    placeholder="E-mail"
                    value={form.email}
                    onChange={onChange}
                    type="email" //faz validações de e-mail
                    required //torna campo obrigatório
                />
                <label htmlFor="senha"> Senha: </label>
                <input
                    name="password" //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
                    id="senha" //colocar igual ao htmlFor do label
                    placeholder="Senha"
                    value={form.password}
                    onChange={onChange}
                    type="password" //oculta senha
                    pattern="^.{3,}$" //padrão Regex
                    title="mínimo de 3 caracteres"
                    required //torna campo obrigatório
                />

                <button type="submit" >Enviar </button> 
            </form>
        </div>

    )
}

export default LoginPage