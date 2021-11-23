import React, { useContext } from 'react'
import { TimerContext } from '../../Context/TimerContext'
import { PomodoroBtn } from './PomodoroBtn'

export const PomodoroFooter = () => {

    const {
        isStarted,
        setIsStarted,
        settingsState,
        setSettingsState,
        isFocus,
        handleChangeFocus,
        startTimer,
        stopTimer
    } = useContext(TimerContext)

    if(settingsState) {
        return (
            <div className="pomodoro__footer">
                <PomodoroBtn
                    wide="wide" 
                    disabled={isFocus}
                    onClick={handleChangeFocus}
                >
                    Focus
                </PomodoroBtn>
                <PomodoroBtn 
                    wide="wide"
                    disabled={!isFocus}
                    onClick={handleChangeFocus}
                >
                    Break
                </PomodoroBtn>
            </div>
        )
    }

    return (
        <div className="pomodoro__footer">
            {!isStarted ?
                <PomodoroBtn 
                    wide="wide"
                    onClick={startTimer}
                >
                    Start
                </PomodoroBtn> :
                <>
                <PomodoroBtn
                    wide="wide"
                >
                    Pause
                </PomodoroBtn>
                <PomodoroBtn
                    wide="wide"
                    // onClick={stopTimer}
                >
                    Stop
                </PomodoroBtn>
                </>
            }
            
        </div>
    )
}
