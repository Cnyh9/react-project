import React from 'react'

export const PomodoroBtn = ({children, wide, disabled, onClick}) => {
    return (
        <button 
            className={wide ? 'pomodoro__btn --wide' : "pomodoro__btn"}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
