import React, { useContext } from 'react'
import { WeatherContext } from '../../../Context/WeatherContext'

export const DetailsHeader = ({detailsValue}) => {
    return (
        <div>
            <div className="details__header">
                <div>
                    <img src={`https://openweathermap.org/img/wn/${detailsValue.img}@2x.png`} width="50px" />
                </div>
                <div>
                    <div className="details__header--description">{detailsValue.description}</div>
                    <div>Макс: {Math.round(detailsValue.max)}&deg;C, Мин: {Math.round(detailsValue.min)}&deg;C</div>
                </div>
            </div>
        </div>
    )
}
