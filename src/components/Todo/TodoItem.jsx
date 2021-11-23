import { IconButton, Tooltip } from '@material-ui/core';
import { Check, Delete, Edit } from '@material-ui/icons';
import { Checkbox, Grid, Input, ListItem } from '@mui/material'
import React, { useContext } from 'react'
import { TodosContext } from '../../Context/TodosContext';


export const TodoItem = ({todo, index}) => {

    const { 
        toggleTodo,
        removeTodo, 
        editTodo, 
        edit, 
        setEdit,
        value,
        setValue,
        saveTodo
    } = useContext(TodosContext)


    return (
        <ListItem>
            <Checkbox 
                type="checkbox"
                onChange={() => toggleTodo(todo.id)}
                checked={todo.completed}
            />
            <Grid container>
                { edit === todo.id
                    ? 
                    <div style={{width: '100%'}}>
                        <Input 
                            fullWidth
                            disableUnderline
                            autoFocus
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>  
                    : 
                    <div style={{flex: 1}} className={todo.completed && "done"}>
                        {index + 1}. {todo.title}
                    </div>
                }

                
            </Grid>
            { edit === todo.id
            ?
                <Tooltip title="Сохранить заметку">
                <IconButton color="success">
                    <Check onClick={() => saveTodo(todo.id)}/>
                </IconButton>
                </Tooltip>
            :
                <Tooltip title="Редактировать заметку">
                <IconButton>
                    <Edit onClick={() => editTodo(todo.id, todo.title)}/>
                </IconButton>
                </Tooltip>
            }
            
            <Tooltip title="Удалить заметку">
                <IconButton>
                    <Delete onClick={() => removeTodo(todo.id)}/>
                </IconButton>
            </Tooltip>
        </ListItem>
    )
}