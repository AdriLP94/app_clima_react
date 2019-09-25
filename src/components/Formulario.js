import React, {useState} from 'react';

const Formulario = ({datosConsulta}) => {

    const [busqueda, guardarBusqueda] = useState({
        ciudad : "",
        pais : ""
    })

    const handleSubmit = e => {
        e.preventDefault();
        datosConsulta(busqueda);
    }

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona un país</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="FR">Francia</option>
                    <option value="UK">Reino Unido</option>
                    <option value="IT">Italia</option>
                    <option value="DE">Alemania</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar"/>
            </div>
        </form>
    );
};

export default Formulario;