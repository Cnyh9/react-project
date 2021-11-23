import { Add } from '@material-ui/icons'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { TodosContext } from '../../Context/TodosContext'
import { ModalAlert } from './ModalAlert'


export const Addtodo = () => {

    const {addTodo} = useContext(TodosContext)
    const [value, setValue] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const alertOpen = () => {
        setShowAlert(true)
    }

    const alertClose = () => {
        setShowAlert(false)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (value.trim()) {
            addTodo(value)
            setValue('')
        } else {
            alertOpen()
        }
    }
    return (
        <>
        <Box sx={{mt: '30px', mb: '30px'}} 
            component="form"
            onSubmit={submitHandler}
        >
            <TextField 
                value={value}
                onChange={(event) => setValue(event.target.value) }
                label="Введите текст"
                size="small"
                fullWidth
                color="secondary"
            />
            <Button
                sx={{mt:'5px'}}
                type="submit"
                variant="outlined"
                startIcon={<Add/>}
            >Добавить</Button>
        </Box>
        <ModalAlert hide={alertClose} alertState={showAlert}/>
        </>
    )
}