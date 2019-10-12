import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from'./components/Error';
import Clima from './components/Clima';

function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [resultado, guardarResultado] = useState("");
  const [error, guardarError] = useState(false);


  useEffect(()=> {
    if (ciudad === "") {
      return;
    }

    const consultarAPI = async () =>{

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${process.env.REACT_APP_APIKEY}`;
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado);
    }

    consultarAPI();

  },[ciudad, pais]);

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
                {error ? <Error mensaje= "Ambos campos son obligatorios"/> : <Clima resultado={resultado}/>}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
