import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import { useState } from 'react';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  const [posts, setPosts] = useState ([
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Guilherme', 
      fotoUsuario: 'https://media-exp1.licdn.com/dms/image/C5103AQFIeWbvLI-YjA/profile-displayphoto-shrink_200_200/0/1517275713615?e=1659571200&v=beta&t=LS-k4sMM_RY_dbxP-qTJsuwirYZBk11V4l8oT0bnXKI',
      fotoPost: 'https://cdn.motor1.com/images/mgl/91Xzg/s3/chevrolet-onix-plus-x-vw-virtus.jpg'
    },
    {
      nomeUsuario: 'Helena',
      fotoUsuario: 'https://i.pinimg.com/236x/f8/5e/ce/f85ece91e4bfbe9544cbdc40cf03a9c3.jpg',
      fotoPost: 'https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
    }
  ])

  const [inputNomeUsuario, setInputNomeUsuario] = useState ("")
  const [inputImagemPost, setInputImagemPost] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")

  const publicarPost = (e) => {
    e.preventDefault()
    const novaPublicacao = {nomeUsuario: inputNomeUsuario, fotoUsuario: inputFotoUsuario, fotoPost: inputImagemPost}
    setPosts ([...posts, novaPublicacao])
  }

  const handleInputFoto = (e) => {
    setInputFotoUsuario(e.target.value)
  }

  const handleInputNome = (e) => {
    setInputNomeUsuario(e.target.value)
  }

  const handleInputPost = (e) => {
    setInputImagemPost(e.target.value)
  }

  const postsFiltrados = posts.map ((nome, index) => {
    return ( 
      <Post key={index} nomeUsuario={nome.nomeUsuario} fotoUsuario={nome.fotoUsuario} fotoPost={nome.fotoPost}/>
  )
})

return(
  <MainContainer>
    {postsFiltrados}
    <form>
      <label>Sua Foto:</label>
      <input
        placeholder='link da sua foto'
        value={inputFotoUsuario}
        onChange={handleInputFoto}
        />

      <label>Seu nome:</label>
        <input
          placeholder='seu nome'
          value={inputNomeUsuario}
          onChange={handleInputNome}
        />

      <label>Seu post:</label>
        <input
        placeholder='link do seu post'
        value={inputImagemPost}
        onChange={handleInputPost}
        />

      <button onClick={publicarPost}>Enviar</button>
    </form>
  </MainContainer>
)
}




export default App;
