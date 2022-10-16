import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import img from './img/cat.gif'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo' src={ img } alt='logo' />
      </div>
      <div className='contenedor'>
        <Contador numClics={ numClics } />
        <Boton 
          texto = 'Clic'
          esBotonDeClic={ true }
          manejarClic={ manejarClic } />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={ false }
          manejarClic={ reiniciarContador } />
      </div>
    </div>
  );
}

export default App;
