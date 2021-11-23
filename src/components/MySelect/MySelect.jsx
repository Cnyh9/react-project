import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'

export const MySelect = ({cities, cityState, cityChangeHandler}) => {


    return (
        <FormControl fullWidth sx={{minWidth: '300px', mt:'20px'}}>
            <InputLabel id="demo-simple-select-label">Город</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cityState}
            label="Город"
            onChange={cityChangeHandler}
            >
                {cities.map(item => {
                    return (
                        <MenuItem key={item.city} value={item.city}>{item.city}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}