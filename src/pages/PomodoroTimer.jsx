import React, { useMemo, useState } from 'react'
import { PomodoroContent } from '../components/pomodoro/PomodoroContent'
import { PomodoroFooter } from '../components/pomodoro/PomodoroFooter'
import { PomodoroHeader } from '../components/pomodoro/PomodoroHeader'
import { TimerContext } from '../Context/TimerContext'

export const PomodoroTimer = () => {

    const [focusState, setFocuState] = useState(5)
    const [breakState, setBreakState] = useState(15)
    const [isStarted, setIsStarted] = useState(false)
    const [settingsState, setSettingsState] = useState(false)
    const [isFocus, setIsFocus] = useState(true)

    const decrementFocus = () => {
        if(focusState > 0)
        setFocuState(focusState - 5)
    }

    const incrementFocus = () => {
        if(focusState < 90)
        setFocuState(focusState + 5)
    }

    const decrementBreak = () => {
        if(breakState > 0) {
            setBreakState(breakState - 5)
        }
    }

    const incrementBreak = () => {
        if(breakState < 90) {
            setBreakState(breakState + 5)
        }
    }

    const handleChangeFocus = () => {
        setIsFocus(!isFocus)
    }

    let timerId;

    const startTimer = () => {
        setIsStarted(true)
        timerId = setInterval(() => {
            setFocuState(prev => prev - 1)
        }, 1000)
        const delay = focusState * 1000;
        setTimeout(() => clearInterval(timerId), delay)
    }

    const stopTimer = () => {
        // clearInterval(timerId)
        // setIsStarted(false)
        // console.log('stop timer');
    }

    return (
        <TimerContext.Provider value={{
            isStarted,
            setIsStarted,
            settingsState,
            setSettingsState,
            focusState,
            breakState,
            decrementFocus,
            incrementFocus,
            incrementBreak,
            decrementBreak,
            isFocus,
            handleChangeFocus,
            startTimer,
            stopTimer
        }}>
            <div className="pomodoro">
                <div className="pomodoro__wrapper">
                    <PomodoroHeader />
                    <PomodoroContent />
                    <PomodoroFooter />
                </div>
            </div>
        </TimerContext.Provider>
    )
}
