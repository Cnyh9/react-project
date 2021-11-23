import React, { useContext } from 'react'
import { WeatherContext } from '../../../Context/WeatherContext'

export const DetailsInfo = ({detailsValue}) => {

    const {
        setDirection,
        pressure,
    } = useContext(WeatherContext)

    return (
        <div className="details__info">
            <div className="details__info--item">
                Ветер: {Math.round(detailsValue.windSpeed)}м/с, {setDirection(detailsValue.windDeg)}
            </div>
            <div className="details__info--item">
                Давление: {pressure(detailsValue.pressure)} мм рт.ст
            </div>
            <div className="details__info--item">
                Влажность: {detailsValue.humidity}%
            </div>
            <div className="details__info--item">
                Точка росы: {Math.round(detailsValue.dewPoint)}&deg;C
            </div>
        </div>
    )
}
