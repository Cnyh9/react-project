import { ViewDay } from '@material-ui/icons'
import moment from 'moment'
import React, { useContext, useState, useEffect } from 'react'
import { WeatherContext } from '../../Context/WeatherContext'
import { WeatherDetails } from './details/WeatherDetails'

export const WeatherWeakly = () => {

    const {dailyWeather, cityState} = useContext(WeatherContext)
    const [details, setDetails] = useState(false)
    const [detailsValue, setDetailsValue] = useState({})

    const clickHandler = (currentDay) => {
        setDetails(!details)
        setDetailsValue({
            img: currentDay.weather[0].icon,
            description:currentDay.weather[0].description,
            max: currentDay.temp.max,
            min: currentDay.temp.min,
            windSpeed: currentDay.wind_speed,
            windDeg: currentDay.wind_deg,
            humidity: currentDay.humidity   ,
            dewPoint: currentDay.dew_point,
            pressure: currentDay.pressure,
            feelsLike: {
                day: currentDay.feels_like.day,
                eve: currentDay.feels_like.eve,
                morn: currentDay.feels_like.morn,
                night: currentDay.feels_like.night,
            },
            temp: {
                day: currentDay.temp.day,
                eve: currentDay.temp.eve,
                morn: currentDay.temp.morn,
                night: currentDay.temp.night,
            }
        })
    }
    useEffect(() => {
        setDetails(false)
    }, [cityState])

    const date = (index) => {
        moment.locale('ru')
        const day = moment().add(1 + index).format('dddd, MM MMM')
        return day
    }
   

   

    return (
        <div>
            <h2 style={{marginBottom: 10}}>Прогноз на 8 дней</h2>
            {!details 
            ?
            <ul className="weekly__list">
                {dailyWeather.map((day, i) => {
                    return (
                        <li className="weekly__item" onClick={() => clickHandler(day)} key={i}>
                            <div className="item__date">{moment().format('ddd, d MMM')}</div>
                            <div className="item__temp">
                                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} width="30px"/>
                                <div>{Math.round(day.temp.max)} / {Math.round(day.temp.min)}&deg;C</div>
                            </div>
                            <div className="item__description">{day.weather[0].description}</div>
                        </li>
                    )
                })}
            </ul>
            :
            <div onClick={() => setDetails(!details)}>
                <WeatherDetails detailsValue={detailsValue} />
            </div>
            }
        </div>
    )
}
