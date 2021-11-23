import { Button, DialogContentText } from '@material-ui/core'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { useState } from 'react'


export const ModalAlert = ({hide, alertState}) => {

    
    return (
        <Dialog
            open={alertState}
            keepMounted
            onBackdropClick={hide}
        >
            <DialogTitle>Вы не ввели текст!</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Введите текст заметки, которую вы бы хотели включить в список дел
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={hide}>Понятно</Button>
            </DialogActions>
        </Dialog>
    )
}