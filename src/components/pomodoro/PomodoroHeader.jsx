import React, { useContext } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import InfoIcon from '@mui/icons-material/Info';
import { Divider, IconButton } from '@mui/material';
import { TimerContext } from '../../Context/TimerContext';

export const PomodoroHeader = () => {

    const {settingsState, setSettingsState} = useContext(TimerContext)

    return (
        <div className="pomodoro__header">
            {!settingsState ?
            <IconButton size="small" onClick={() => setSettingsState(true)}>
                <SettingsIcon />
            </IconButton> :
            <IconButton size="small" onClick={() => setSettingsState(false)}>
                <SaveIcon/>
            </IconButton>
            }
            <div className="header__content">
                Set up focus time
            </div>
            <IconButton size="small">
                <InfoIcon />
            </IconButton>
            <Divider light/>
        </div>
    )
}
