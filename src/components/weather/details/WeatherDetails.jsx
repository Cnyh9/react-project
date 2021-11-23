import React from 'react'
import { DetailsHeader } from './DetailsHeader'
import { DetailsInfo } from './DetailsInfo'
import { DetailsSun } from './DetailsSun'
import { DetailsTemp } from './DetailsTemp'

export const WeatherDetails = ({detailsValue}) => {
    return (
        <div className="weakly__details">
            <DetailsHeader detailsValue={detailsValue} />
            <DetailsInfo detailsValue={detailsValue} />
            <DetailsTemp detailsValue={detailsValue} />
            {/* <DetailsSun detailsValue={detailsValue}  /> */}
        </div>
    )
}
