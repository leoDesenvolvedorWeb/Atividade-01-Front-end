import './App.css';
import Welcome from './components/Welcome/Welcome';
import Menssagen from './components/Menssagen/Menssagen';
import Reverse from './components/Reverse/Reverse';

function App() {
  return (
    <div className="App">
      <Welcome nome='Leo' sobrenome='Ramos'/>
      <Welcome nome='Maria' sobrenome='Souza'/>
      <Menssagen/>
      <div className='reverse'>
        <p className='app-text'>Os texto abaixo são criados pelo componente Reverse:</p>
        <Reverse texto='Ola'/>
        <Reverse texto='Seja bem vindo'/>
      </div>
      
    </div>

  );
}

export default App;
