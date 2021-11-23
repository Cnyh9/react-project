import { Divider, List } from '@mui/material'
import React from 'react'
import { TodoItem } from './TodoItem'

const styles = {
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
    }
}

export const TodoList = ({todos}) => {
    return (
        <List style={styles.ul}> 
            {todos.map((todo, index) => {
                return (
                    <div key={todo.id}>
                        <TodoItem 
                            todo={todo}
                            index={index}
                        />
                        <Divider />
                    </div>
                )
            })}
        </List>
    )
}