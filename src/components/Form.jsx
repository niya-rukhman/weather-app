import React, { Component } from 'react';
import './Form.css';
// import Result from './Result';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            country: ""
        };
    }
    
    setCity = (event) => {
        const city = event.target.value;
        this.setState({ city: city })
    }
    
    setCountry = (event) => {
        const country = event.target.value;
        this.setState({ country: country })
    }

    render() {
        return (
            <div className="Form">
                <input type="text" placeholder="enter city name" value={this.state.city} onChange={this.setCity} className="enter"/>

                <input type="text" placeholder="enter country name" value={this.state.country} onChange={this.setCountry} className="enter"/>

                <button onClick={() => this.props.handleSubmit(this.state)} className="btn">GET WEATHER</button>

            </div>

        );

    }

}
export default Form;

