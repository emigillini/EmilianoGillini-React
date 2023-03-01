import logo from './logo.svg';
import './App.css';
import saludar from './prueba';

let styles = {
  borderColor: "black",
  marginLeft: 500
};

const letra =() =>{
  alert("muy bien")
}

function App() {
  saludar()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={styles}>
         "EMILIANO GILLINI"
        </p>
        <button id='bot1' onClick={letra}>soy </button>
        
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
