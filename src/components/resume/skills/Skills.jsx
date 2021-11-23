import { Rating } from '@mui/material'
import React from 'react'
import html from '../../../assets/img/html.png'
import js from '../../../assets/img/javascript.png'
import sass from '../../../assets/img/sass.png'
import react from '../../../assets/img/react.png'
import redux from '../../../assets/img/redux.png'
import ts from '../../../assets/img/typescript.png'
import {ThemeProvider, createTheme} from '@material-ui/core'


const theme = createTheme({
    components: {
        MuiRating: {
            styleOverrides: {
                root: {
                    fontSize: '1.2rem',
                    color: '#333'
                }
            }
        }
    }
})

export const Skills = () => {
    return (
        <ThemeProvider theme={theme}>
        <div className="skills__wrapper">
            <div className="skills__item">
                <img src={html} alt="" />
                <Rating size="small" defaultValue={4} precision={0.5} readOnly/>
            </div>
            <div className="skills__item">
                <img src={sass} alt="" />
                <Rating size="small" defaultValue={4} precision={.5} readOnly/>
            </div>
            <div className="skills__item">
                <img src={js} alt="" />
                <Rating size="small" defaultValue={2.5} precision={.5} readOnly/>
            </div>
            <div className="skills__item">
                <img src={react} alt="" />
                <Rating size="small" defaultValue={3} precision={.5} readOnly/>
            </div>
            <div className="skills__item --asd">
                <img src={redux} alt="" />
                <Rating size="small" defaultValue={2} precision={.5} readOnly/>
            </div>
            <div className="skills__item">
                <img src={ts} alt="" />
                <Rating size="small" defaultValue={1.5} precision={.5} readOnly/>
            </div>
        </div>
        </ThemeProvider>
        
    ) 
}

