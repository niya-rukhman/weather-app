import React, { Component } from 'react';
import './Result.css';
// import countryFlag from 'country.json';

function Result(props) {
    return (
        <div className="Result">
        {/* <div className="backgroundImages">
            countryFlag.Pakistan
        </div> */}
            {props.country && <p>Country:{props.country}</p>}
            {props.city && <p>City:{props.city}</p>}
            {props.humidity && <p>Humidity:{props.humidity}</p>}
            {props.temp && <p>Temperature:{props.temp}</p>}
            {props.wind && <p>Wind:{props.wind}</p>}
            {props.weatherDescription && <p>Description:{props.weatherDescription}</p>}
            {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="icon" />}

        </div>
    );
}
export default Result;