import { AccountBalance, Cloud, FormatListNumbered, AvTimer } from '@material-ui/icons'
import {Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from 'react-router-dom'


export const LeftBar = ({closeDrawer, DrawerState}) => {


    return (
        <Drawer open={DrawerState} onClose={closeDrawer}>
            <Box sx={{width: 250}}>
                <List>
                    <NavLink to="/todos">
                        <ListItem button onClick={closeDrawer}>
                            <ListItemIcon><FormatListNumbered /></ListItemIcon>
                            <ListItemText>Заметки</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/cash">
                        <ListItem button onClick={closeDrawer}>
                            <ListItemIcon><AccountBalance /></ListItemIcon>
                            <ListItemText>Счетчик денег</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/weather">
                        <ListItem button onClick={closeDrawer}>
                            <ListItemIcon><Cloud /></ListItemIcon>
                            <ListItemText>Погода</ListItemText>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/pomodoro">
                        <ListItem button onClick={closeDrawer}>
                            <ListItemIcon><AvTimer /></ListItemIcon>
                            <ListItemText>Pomodoro</ListItemText>
                        </ListItem>
                    </NavLink>
                </List>
            </Box>
        </Drawer>
    )
}