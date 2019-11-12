import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
// import NightTime from './components/BackImages/NightTime';
// import DayTime from './components/BackImages/DayTime';
import axios from 'axios';
import Result from './components/Result';
import MainPage from './components/MainPage';

// const key= df4a749288bdc57b5321e1fb1459cb68;

class App extends Component {
  state = {
    country: '',
    city: '',
    humidity: '',
    temp: '',
    weatherDescription: '',
    wind: '',
    icon: ''
  }

  getWeather = async (city) => {
    try {
      const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?appid=df4a749288bdc57b5321e1fb1459cb68&q=' + city);
      console.log({response})
      if (response) {
        this.setState({
          country: response.data.sys.country,
          city: response.data.name,
          humidity: response.data.main.humidity,
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon,
          weatherDescription: response.data.weather[0].description
          // handle success

        })
        
      }

    }
    catch (error) {
      // handle error
      alert('Wrong input');
      console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <MainPage />
        <Form getWeather={this.getWeather} />
        {/* <NightTime /> */}
        <Result
          country={this.state.country}
          city={this.state.city}
          humidity={this.state.humidity}
          temp={this.state.temp}
          weatherDescription={this.state.weatherDescription}
          wind={this.state.wind}
          icon={this.state.icon} />
        {/* <DayTime /> */}

      </div>
    );
  }
 
}
export default App;
