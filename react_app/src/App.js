import logo from './logo.svg';
import './App.css';

function handleButtonClick(){
  alert('Clicou!!!');
}

function App() { 
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React !</p>
        <input type="button" value="Clique Me!" onClick={handleButtonClick}/>
      </header>
    </div>
  );
}

export default App;
