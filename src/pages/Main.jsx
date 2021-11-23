import React from 'react'
import { LeftSide } from '../components/resume/LeftSide'
import { ResumeHeader } from '../components/resume/ResumeHeader'
import { RightSide } from '../components/resume/RightSide'
import Paper from '@mui/material/Paper';
import { VerticalDel } from '../components/resume/Del/VerticalDel';



export const Main = () => {
    return (
        <Paper className="resume" elevation={5}>
            <ResumeHeader />
            <div className="resume__info">
                <LeftSide  />
                <VerticalDel />
                <RightSide />
            </div>
        </Paper>
    )
}