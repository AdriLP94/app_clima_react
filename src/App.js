import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from'./components/Error';

function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false)

  const datosConsulta = datos => {
    if(datos.ciudad === "" || datos.pais === "") {
      guardarError(true);
      return;
    }
    
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }



  return (
    <div className="App">
        <Header/>
        <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Formulario
                  datosConsulta = {datosConsulta}
                />
              </div>
              <div className="col s12 m6">
                {error ? <Error/> : null}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
