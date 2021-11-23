import React, { useContext } from 'react'
import { TimerContext } from '../../Context/TimerContext'
import { PomodoroBtn } from './PomodoroBtn'
import { PomodoroFooter } from './PomodoroFooter'

export const PomodoroContent = () => {

    const {
        isFocus,
        settingsState,
        focusState,
        breakState,
        incrementFocus,
        decrementFocus,
        incrementBreak,
        decrementBreak
    } = useContext(TimerContext)

    return (
        <div className="pomodoro__content">
            {settingsState && <PomodoroBtn
                onClick={isFocus ?decrementFocus :decrementBreak}
            >-</PomodoroBtn>}
            <div className="content__timer">
                {isFocus ?focusState :breakState}:00
            </div>
            {settingsState && <PomodoroBtn 
                onClick={isFocus ?incrementFocus :incrementBreak}
            >+</PomodoroBtn>}
        </div>
    )
}
