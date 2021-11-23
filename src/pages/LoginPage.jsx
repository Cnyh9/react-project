import { Button, Container } from '@material-ui/core'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Login } from '../components/login/Login'
import { Registration } from '../components/login/Registration'




export const LoginPage = () => {

    const [isSignIn, setIsSignIn] = useState(true)

    const toRegistration = () => {
        setIsSignIn(false)
    }

    const toLogin = () => {
        setIsSignIn(true)
    }

    return (
        <Container maxWidth="sm" className="login__container">
            <Box className="login__form">
                {isSignIn 
                    ? <Login />
                    : <Registration />
                }
                <Box sx={{mt: '30px', display: 'flex', justifyContent: 'flex-end'}}>
                    <Button disabled={isSignIn} color="secondary" onClick={toLogin}>Sign in</Button>
                    <Button disabled={!isSignIn} color="secondary" onClick={toRegistration}> Sign up</Button>
                </Box>
            </Box>     
        </Container>
    )
}