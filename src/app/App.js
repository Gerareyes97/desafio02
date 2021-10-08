import React, { Component } from 'react';

import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';

import { WEATHER_KEY } from './keys';

class App extends Component {

    state = {
        temperatura: '',
        descripcion: '',
        humedad: '',
        velocidad: 0,
        ciudad: '',
        pais: '',
        error: null
    };

    getWeather = async (e) => {
        e.preventDefault();
        const { ciudad, pais } = e.target.elements;
        const ciudadValue = ciudad.value;
        const paisValue = pais.value;

        if (ciudadValue && paisValue) {

            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue},${paisValue}&appid=${WEATHER_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data)

            this.setState({
                temperatura: data.main.temp,
                descripcion: data.weather[0].description,
                humedad: data.main.humidity,
                velocidad: data.wind.speed,
                ciudad: data.name,
                pais: data.sys.country,
                error: null
            });
        } else {
            this.setState({
                error: 'Digite ciudad y pais.'
            });
        }

    }

    render() {
        return <div className="container p-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <WeatherForm
                        getWeather={this.getWeather}
                    />
                    <WeatherInfo {...this.state} />
                </div>
            </div>
        </div>
    }
}

export default App;