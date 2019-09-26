import React from 'react';
import Error from './Error';

const Clima = ({resultado}) => {

    console.log(resultado);
    const {name, cod, main} = resultado;
    if(!cod) return null;

    const kelvin = 273.15;
    
    return (
        cod === 200 ?
        <div className ="card-panel white col s12">
            <div className="black-text">
                <h2>Clima en: {name}</h2>
                <p className="temperatura">{parseInt(main.temp - kelvin)}ºC</p>
                <div>
                    <p>
                        <span className="temperatura-max col s6">Max: {parseInt(main.temp_max - kelvin, 10)}ºC</span>
                        <span className="temperatura-min col s6">Min: {parseInt(main.temp_min - kelvin, 10)}ºC</span>
                    </p>
                </div>
            </div>
        </div>
        : <Error mensaje="Esta ciudad no existe en nuestro registro"/>
    );
};

export default Clima;