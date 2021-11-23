import { Container, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Loader } from '../components/loader/Loader'
import { WeatherCitySelect } from '../components/weather/WeatherCitySelect'
import { WeatherCurrent } from '../components/weather/WeatherCurrent'
import { WeatherWeakly } from '../components/weather/WeatherWeakly'
import { WeatherContext } from '../Context/WeatherContext'

export const WeatherPage = () => {
    
    const apiKey = '2cf2f2cf2e626e2fba9a41930b43e12f'
    const cities = [
        {id: 1, city: 'Москва', lat: '55.55', lon:'37.37'},
        {id: 2, city: 'Иркутск', lat: '52.29', lon:'37.37'},
        {id: 3, city: 'Лос-Анджелес', lat: '34.05', lon:'18.24'},
        {id: 4, city: 'Красный Кут', lat: '50.57', lon:'46.58'},
        {id: 5, city: 'Талас', lat: '42.31', lon:'72.39'},
    ]
    const [cityState, setCityState] = useState('Москва');
    const cityChangeHandler = (event) => {
        setCityState(event.target.value);
    };
    let lat = 55.55
    let lon = 37.37

    switch (cityState) {
        case cities[0].city:
            lat = cities[0].lat
            lon = cities[0].lon
            break
        case cities[1].city:
            lat = cities[1].lat
            lon = cities[1].lon
            break
        case cities[2].city:
            lat = cities[2].lat
            lon = cities[2].lon
            break
        case cities[3].city:
            lat = cities[3].lat
            lon = cities[3].lon
            break
        case cities[4].city:
            lat = cities[4].lat
            lon = cities[4].lon
            break
    }
    
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=ru&appid=${apiKey}`

    const [weatherState, setWeatherState] = useState([{}])
    const [dailyWeather, setDailyWeather] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const weatherIcon = `https://openweathermap.org/img/wn/${weatherState.currentTempIcon}@2x.png`

    useEffect(() => {
        weatherReq()
    }, [cityState])

    const weatherReq = async () => {
        const response = await fetch(url)
        const result = await response.json()

        setWeatherState({
            temp: result.current.temp,
            city: result.timezone,
            feelsLike: result.current.feels_like,
            sunrise: result.current.sunrise,
            sunset: result.current.sunset,
            currentTempIcon: result.current.weather[0].icon,
            description: result.current.weather[0].description,
            windSpeed: result.current.wind_speed,
            windDirection: result.current.wind_deg,
            pressure: result.current.pressure,
            humidity: result.current.humidity,
            dew_point: result.current.dew_point,
            visibility: result.current.visibility,

        })

        setDailyWeather(result.daily)
        setIsLoading(true)
    }
    
    // Получение направления ветра
    const setDirection = deg => {
        const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']
        const direction = Math.round(deg * 8 / 360, 0)
        return directions[direction]
    }
    // Перевод давления в мм рт.ст.
    const pressure = pa => {
        const dif = 0.750062
        const mm = Math.round(pa * dif)
        return mm
    }

    return (
        <>
            {isLoading 
            ? 
            <WeatherContext.Provider value={{
                cityState,
                weatherState,
                pressure,
                setDirection,
                weatherIcon,
                cities,
                cityChangeHandler,
                dailyWeather
            }}>
                <Container maxWidth="md">
                <div className="current__wrapper">
                    <WeatherCurrent />
                    <WeatherCitySelect />
                </div>
                <div className="weakly__wrapper">
                    <WeatherWeakly />
                </div>
                </Container>
            </WeatherContext.Provider>
            : <Loader/>
            }
        </>
    )
}

