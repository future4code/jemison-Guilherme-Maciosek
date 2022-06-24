
import './App.css';
import logo from './img/logo.jpg'

function App() {

  const titulo = 'Olá! Eu sou o Guilherme!'
  const rodape = 'Este é o meu primeiro site React'
  const mensagemBotao =()=> {
    alert ('Boa noite visitante!')
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={logo} className='logo' alt='logo da labenu'/>
      <h4>{rodape}</h4>
      <button className='botao' onClick={mensagemBotao}>Aperte este botão</button>
    </div>
  );
}

export default App;
