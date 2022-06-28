import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
           <Post
            nomeUsuario={'Guilherme'}
            fotoUsuario={'https://media-exp1.licdn.com/dms/image/C5103AQFIeWbvLI-YjA/profile-displayphoto-shrink_200_200/0/1517275713615?e=1659571200&v=beta&t=LS-k4sMM_RY_dbxP-qTJsuwirYZBk11V4l8oT0bnXKI'}
            fotoPost={'https://cdn.motor1.com/images/mgl/91Xzg/s3/chevrolet-onix-plus-x-vw-virtus.jpg'}
          />
           <Post
            nomeUsuario={'Helena'}
            fotoUsuario={'https://i.pinimg.com/236x/f8/5e/ce/f85ece91e4bfbe9544cbdc40cf03a9c3.jpg'}
            fotoPost={'https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'}
          />
        </MainContainer>
        
)

}


export default App;
