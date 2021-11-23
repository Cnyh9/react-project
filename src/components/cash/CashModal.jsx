import { DialogContent } from '@material-ui/core'
import { Button, Dialog, DialogTitle, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export const CashModal = ({showAlert, hideAlert, inputValue, setInputValue, submitHandler}) => {

    

    return (
        <Dialog
            open={showAlert}
            keepMounted
            onBackdropClick={hideAlert}
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle>Введите имя клиента</DialogTitle>
            <DialogContent>
                <Box >
                    <TextField 
                        sx={{mt: '20px'}}
                        fullWidth 
                        margin="dense"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', mt: '20px'}}>
                    <Button onClick={submitHandler}>ОК</Button>
                    <Button onClick={hideAlert}>Отмена</Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}