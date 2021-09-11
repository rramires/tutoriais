import logo from './logo.svg';
import './App.css';
// import
import Header from './Header';

function handleButtonClick(){
  alert('Clicou!!!');
}

function App() { 
  return (
    <div className="App">
      <Header title="Hello Componet Header !!!"/>
      <input type="button" value="Clique Me!" onClick={handleButtonClick}/>
    </div>
  );
}

export default App;
