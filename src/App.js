import './App.css';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejoContador = () => {
    setNumClicks(numClicks + 1);
  };
  
  const reinicioContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='title-container'>
        <h1>Contador de Clicks</h1>
      </div>
      <div className='main-container'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto="Incrementar"
          esBtnClick={true}
          manejoClick={manejoContador} />
        <Boton
          texto="Reiniciar"
          esBtnClick={false}
          manejoClick={reinicioContador} />
      </div>
    </div>
  );
}

export default App;
