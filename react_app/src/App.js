import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import
import Header from './Header';

function App() { 

  const [contador, setContador] = useState(0);
  
  function handleButtonClick(){
    setContador(contador +1); // ++ não funciona
  }

  return (
    <div className="App">
      <Header title={'O Valor é: ' + contador}/>
      <input type="button" value="Clique Me!" onClick={handleButtonClick}/>
    </div>
  );
}

export default App;
