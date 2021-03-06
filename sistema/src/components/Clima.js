import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Clima = ({ resultado }) => {


    const { name, main } = resultado;


    if (!name) return null;

    const kelvin = 273.15;

    return (

        <Fragment>
            <div className="card-panel white col s12">
                <div className="black-text">
                    <h2>El clima de {name} es:</h2>
                    <p className="temperatura">
                        {parseFloat(main.temp - kelvin, 10).toFixed(2)} <samp>&#x2103;</samp>
                    </p>
                    <p>Temperatura Maxima:
                        {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <samp>&#x2103;</samp>
                    </p>
                    <p>Temperatura Minima:
                        {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <samp>&#x2103;</samp>
                    </p>
                </div>
            </div>
        </Fragment>

    );

};

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;