import React from 'react'

export const MyJob = ({title, subtitle, date, children}) => {
    return (
        <div className="myJob">
            <div className="myJob__header">
                <div className="myJob__position">
                    <h3 className="position__title">{title}</h3>
                    <h3 className="position__subtitle">{subtitle}</h3>
                </div>
                <h3 className="myJob__date">{date}</h3>
            </div>
            <div className="myJob__info">
                {children}
            </div>
            
        </div>
    )
}
