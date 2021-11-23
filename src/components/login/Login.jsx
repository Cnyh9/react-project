import { Button, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { LoginContext } from '../../Context/LoginContext'
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@material-ui/icons';


export const Login = () => {

    const {goLogin} = useContext(LoginContext)

    const [mailValue, setMailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [pwrdVisible, setPwrdVisible] = useState(false)

    const showPassword = () => {
        setPwrdVisible(!pwrdVisible)
    }

    const userData = {
        email: 'example@test.ru',
        password: "1234"
    }
    const currentUserData = {
        email: mailValue,
        password: passwordValue
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (JSON.stringify(userData) === JSON.stringify(currentUserData)) {
            goLogin()
        } else {
            alert('не верные данные')
        } 
    }

    return (
        <Box component="form" onSubmit={submitHandler} >
            <h1 className="login__header">Log in</h1>
            <TextField 
                fullWidth
                label="Введите e-mail"
                placeholder="example@test.ru"
                required
                margin="normal"
                value={mailValue}
                onChange={(e) => setMailValue(e.target.value)}
            />
            <TextField 
                fullWidth
                label="Введите пароль"
                required
                margin="normal"
                type={pwrdVisible ? 'text' : 'password'}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                InputProps={passwordValue && {
                    endAdornment:
                    <InputAdornment >
                        <IconButton onClick={showPassword}>
                            {pwrdVisible ?<VisibilityOff/> :<Visibility/>} 
                        </IconButton>
                    </InputAdornment>
                }}
            >
            </TextField>
            <Button sx={{marginTop: '20px'}} 
                    fullWidth variant="outlined" 
                    size="large"
                    type="submit"
            >Войти
            </Button>
            <div 
                className="withoutLogin"
                onClick={() => goLogin()}
            >
                Продолжить без авторизации
            </div>
        </Box>
    )
}