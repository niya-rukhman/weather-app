import React from 'react';
import './Result.css';
// import countryFlag from './country.json';

function Result(props) {
    return (
        <div className="Result">
            {props.country && <p className="info">Country:{props.country}</p>}
            {props.city && <p className="info">City:{props.city}</p>}
            {props.humidity && <p className="info">Humidity:{props.humidity}</p>}
            {props.temp && <p className="info">Temperature:{props.temp}</p>}
            {props.wind && <p className="info">Wind:{props.wind}</p>}
            {props.time && <p className="info">Time{props.time}</p>}
            {props.weatherDescription && <p className="info">Description:{props.weatherDescription}</p>}
            
            {props.icon && <p className="info"><img src={`http://openweathermap.org/img/wn/${props.icon}.png`} alt="icon" /></p>}
            
        </div>
    );
}
export default Result;