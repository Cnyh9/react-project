import React, { useContext } from 'react'
import { WeatherContext } from '../../Context/WeatherContext'

export const WeatherCurrent = () => {

    const date = new Date()
    const monthDay = date.toLocaleString('en-us', { month: 'short', day: 'numeric'})
    const currentTime = date.toLocaleTimeString() 

    

    const {
        cityState,
        weatherState,
        pressure,
        setDirection,
        weatherIcon,
        cities,
        cityChangeHandler
    } = useContext(WeatherContext)

    return (
        <div className="weather__current">
            <div className="weather__header">
                <div style={{color: '#eb6e4b'}}>{monthDay}, {currentTime.slice(0, -3)}</div>
                <div style={{fontSize: 26, fontWeight: 700}}>{cityState}</div>
            </div>
            <div className="weather__current-temp">
                <div>
                    <img src={weatherIcon} width="70px"/>
                </div>
                <div style={{fontSize: 36}}>
                    {Math.round(weatherState.temp)}&deg; C
                </div>
            </div>
            <div>
                <div style={{fontSize: 16}}>
                    Ощущается как {Math.round(weatherState.feelsLike)}&deg; C. {weatherState.description[0].toUpperCase() + weatherState.description.slice(1)}
                </div>
            </div>
            <div className="weather__description">
                <div className="weather__description-item">
                    <div style={{marginRight: 20}}>
                        Ветер: {weatherState.windSpeed}м/с, {setDirection(weatherState.windDirection)}
                    </div>
                    <div>
                        Давление: {pressure(weatherState.pressure)} мм рт.ст.
                    </div>
                </div>
                <div className="weather__description-item">
                    <div style={{marginRight: 20}}>Влажность: {weatherState.humidity}%</div>
                    <div>Точка росы: {Math.round(weatherState.dew_point)}&deg; C</div>
                </div>
                <div className="weather__description-item">
                    <div style={{marginRight: 20}}>
                        Видимость: {Math.round(weatherState.visibility / 1000)}км
                    </div>
                    <div></div>
                </div>
            </div>
            
        </div>
    )
}
