import React, { useContext } from 'react'
import { WeatherContext } from '../../Context/WeatherContext'
import { MySelect } from '../MySelect/MySelect'

export const WeatherCitySelect = () => {

    const {cities, cityState, cityChangeHandler} = useContext(WeatherContext)
    return (
        <div className="weather__citySelect" >
            <MySelect 
                cities={cities} 
                cityState={cityState} 
                cityChangeHandler={cityChangeHandler}/>
        </div>
        
    )
}
