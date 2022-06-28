import React from 'react';
import './App.css';
import CardEndereco from './components/CardGrande/CardEndereco/CardEndereco';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Maciosek" 
          descricao="Olá. Me chamo Guilherme, sou aluno Labenu!. Estou aprendendo a desenvolver em front-end, espero entregar ótimos projetos em breve. Procuro me manter atualizado com as principais novidades do mundo tech!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/4812/4812397.png"
          email="E-mail:&nbsp;"
          descricao="glmaciosek@gmail.com"
        />  
      </div>

      <div className="page-section-container">
        <CardEndereco
          imagem="https://cdn.iconscout.com/icon/free/png-256/gps-632-893493.png"
          endereco="Endereço:&nbsp;"
          descricao="Santa Cândida, Curitiba-PR - Brazil"
        />  
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQHFsVkm-0t4fA/company-logo_200_200/0/1643414338931?e=2147483647&v=beta&t=3GxbzolZn6ULI3MuEN4ZXuDaPvJp_S7B3ikzwxQur0U" 
          nome="UHG" 
          descricao="Supervisor de atendimento, onde fora realizado o trabalho de desenvolvimento dos colaboradores em minha hierarquia. Buscando sempre o melhor atendimento ao cliente" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
