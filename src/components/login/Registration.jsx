import { Button, TextField } from '@material-ui/core'
import React from 'react'


export const Registration = () => {
    return (
        <>
        <h1 className="login__header">Registration</h1>
        <TextField 
            fullWidth
            label="Введите e-mail"
            placeholder="example@mail.ru"
            required
            margin="normal"
        />
        <TextField 
            fullWidth
            label="Введите пароль"
            required
            margin="normal"
            type="password"
        />
        <Button sx={{marginTop: '20px'}} 
                fullWidth variant="outlined" 
                size="large"
        >Зарегистрироваться</Button>
        </>
    )
}