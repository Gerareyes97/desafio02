import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="ciudad" placeholder="nombre de tu ciudad" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="pais" placeholder="Nombre de tu pais" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;