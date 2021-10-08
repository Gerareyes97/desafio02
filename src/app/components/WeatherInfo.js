import React from 'react';

const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperatura ?
                <div className="card card-body mt-2 animated fadeInUp" >
                    {
                        props.ciudad && props.pais &&
                        <p><i className="fas fa-location-arrow"></i> Location: {props.ciudad}, {props.pais}</p>
                    }
                    {
                        props.temperatura &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {props.temperatura} ℃, {props.descripcion}</p>
                    }
                    {
                        props.humedad &&
                        <p><i className="fas fa-water"></i> Humidity: {props.humedad}</p>
                    }
                    {
                        props.velocidad &&
                        <p><i className="fas fa-wind"></i> Wind Speed: {props.velocidad}</p>
                    }
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
            }
        </div>

    )
}

export default WeatherInfo;