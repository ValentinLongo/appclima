import Styles from "./Card.module.css"
import Get from "./Get"
import Set from "./Set"
import { WEATHER_KEY } from "./key";
import React, { Component } from 'react';
import Styless from './App.module.css';


class Card extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null
    };

    getWeather = async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {
            // metric parameter is for Celcius Unit
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=c7bb73e1a372ce8dcedec4fb17440d4d&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data)
        
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                error: null
            });
        } else {
            this.setState({
                error: 'Please enter a City and a Country.'
            });
        }
        
}




render(){
    return(
        <div className={Styless.container}>
            <div className={Styles.card}>
                <Set getWeather={this.getWeather}/>
                <Get {...this.state}/>
            </div>
       </div> 
    )
 }
}

export default Card;