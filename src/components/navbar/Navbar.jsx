import { Tooltip } from '@material-ui/core'
import { MenuOutlined } from '@material-ui/icons'
import { DarkMode, LightMode } from '@mui/icons-material'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { LeftBar } from './LeftBar'


export const Navbar = ({goLogout, isLogin}) => {

    const [value, setValue] = useState(false)
    const [mode, setMode] = useState(false)


    const openDrawer = () => {
        setValue(true)
    }

    const closeDrawer = () => {
        setValue(false)
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton disabled={!isLogin} color="inherit" onClick={openDrawer}>
                    <MenuOutlined color="inherit"/>
                </IconButton>
                <Typography 
                    sx={{flexGrow: 1, ml: '24px'}}
                    variant="h6">
                        <Tooltip title="Тестовое приложение" placement="right-start">
                            <a href="/">MyResume-app</a>
                        </Tooltip>
                </Typography>
                <IconButton onClick={() => setMode(!mode)} style={{marginRight: 30}}>
                    {!mode ? <DarkMode color="inherit"/> : <LightMode color="inherit"/>}
                </IconButton>
                {isLogin
                    && <Button
                        variant="outlined"
                        color="inherit"
                        onClick={goLogout}
                      >Выйти
                      </Button>
                }
            </Toolbar>
            <LeftBar closeDrawer={closeDrawer} DrawerState={value}/>
        </AppBar>
    )
}