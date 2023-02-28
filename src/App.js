import logo from './logo.svg';
import './App.css';
import saludar from './prueba';

function App() {
  saludar()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         "EMILIANO GILLINI"
        </p>
        
        <h2>VIVA</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
