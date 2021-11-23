import React from 'react'

export const DetailsTemp = ({detailsValue}) => {
    return (
        <div className="details__temp">
            <div className="details__temp--null"></div>
            <div className="details__temp--morning">Утро</div>
            <div className="details__temp--day">День</div>
            <div className="details__temp--eve">Вечер</div>
            <div className="details__temp--night">Ночь</div>
            <div className="details__temp--item">Температура</div>
            <div className="details__temp--item">
                {Math.round(detailsValue.temp.morn)}&deg;C
            </div>
            <div className="details__temp--item">
                {Math.round(detailsValue.temp.day)}&deg;C
            </div>
            <div className="details__temp--item">
                {Math.round(detailsValue.temp.eve)}&deg;C
            </div>
            <div className="details__temp--item">
                {Math.round(detailsValue.temp.night)}&deg;C
            </div>
            <div className="details__temp--item">Ощущается</div>
            <div className="details__temp--item">
                {Math.round(detailsValue.feelsLike.morn)}&deg;C
            </div>
            <div className="details__temp--item">
                {Math.round(detailsValue.feelsLike.day)}&deg;C
            </div>
            <div className="details__temp--item">
                {Math.round(detailsValue.feelsLike.eve)}&deg;C
            </div>
            <div className="details__temp--item">
                {Math.round(detailsValue.feelsLike.night)}&deg;C
            </div>
        </div>
    )
}
