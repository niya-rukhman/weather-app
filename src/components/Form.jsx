import React, { Component } from 'react';
import './Form.css';
// import Result from './Result';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: " "
        };
    }
    handlerSubmit = (event) => {
        const city = event.target.value;
        this.setState({ value: city })
        
    }


    render() {
        return (
            <div>
                <input type="text" placeholder="enter city name" value={this.state.value} onChange={this.handlerSubmit.bind(this)} />
                <button onClick={() => this.props.getWeather(this.state.value)} >GET WEATHER</button>
                
            </div>

        );
    
    }

}
export default Form;

