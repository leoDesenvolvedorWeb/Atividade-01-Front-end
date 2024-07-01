import './App.css';
import Welcome from './components/Welcome/Welcome';
import Menssagen from './components/Menssagen/Menssagen';

function App() {
  return (
    <div className="App">
      <Welcome nome='Leo' sobrenome='Ramos'/>
      <Menssagen/>
    </div>

  );
}

export default App;
