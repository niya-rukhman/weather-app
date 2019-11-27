import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
// import NightTime from './components/BackImages/NightTime';
// import DayTime from './components/BackImages/DayTime';
import axios from 'axios';
import Result from './components/Result';
import MainPage from './components/MainPage';
import Particles from 'react-particles-js';
import image from "./components/BackImages/city.jpg";

// const key= df4a749288bdc57b5321e1fb1459cb68;

const partObj = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 900
      }
    }
  }
}

const colorArray = ["#fab94394","lightblue"];
  


class App extends Component {
 
  state = {
    country: '',
    city: '',
    humidity: '',
    temp: '',
    weatherDescription: '',
    wind: '',
    icon: '',
    time: ''
  } 
   
 getWeather = async (data) => {
    const city = data.city;
    const country = data.country;
    console.log({ city })
    try {
      const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?appid=df4a749288bdc57b5321e1fb1459cb68&q=' + city);
      console.log({ response })
      if (response) {
        this.setState({
          country: response.data.sys.country,
          city: response.data.name,
          humidity: response.data.main.humidity,
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon,
          weatherDescription: response.data.weather[0].description,
          // handle success
          time: response.data.dt
        });

      }

      let date = new Date(response.data.dt * 1000);

      let hours = date.getHours();

      let minutes = "0" + date.getMinutes();

      let seconds = "0" + date.getSeconds();

      let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

      console.log(formattedTime)
    }
    catch (error) {
      // handle error
      
      console.error(error);
    }
  }
  render() {
    return (
      // style={{backgroundColor:"blue",  backgroundImage: "url('https://lh3.googleusercontent.com/MOf9Kxxkj7GvyZlTZOnUzuYv0JAweEhlxJX6gslQvbvlhLK5_bSTK6duxY2xfbBsj43H=w300')" }}
      <div className={"App " + this.state.time > 13 ? 'day' : 'nite'}>
        {/* <img src={image} alt ="image" className="background"></img> */}

       

        <MainPage />

        <Form handleSubmit={this.getWeather} />
        <div className="par">
        {/* <Particles 
          params={
            partObj} /> */}
       </div>
        <Result
          country={this.state.country}
          city={this.state.city}
          humidity={this.state.humidity}
          temp={this.state.temp}
          weatherDescription={this.state.weatherDescription}
          wind={this.state.wind}
          icon={this.state.icon}
          time={this.state.time}
        />
         
<div className="color-overlay"></div>
      </div>

    );
  }

}
export default App;
