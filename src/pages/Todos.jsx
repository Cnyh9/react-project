import React, { useState, useEffect } from 'react'
import { Addtodo } from '../components/Todo/AddTodo'
import { TodoList } from '../components/Todo/TodoList'
import { TodosContext } from '../Context/TodosContext'
import styled from 'styled-components'

const TodoWrapper = styled.div `
    margin-top: 40px;
    font-size: 30px;
`

export const Todos = () => {

    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')
    const [edit, setEdit] = useState(null)

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos') || []))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const addTodo = (value) => {
        setTodos([...todos, {
                id: Date.now(),
                completed: false,
                title: value,
        }])
    }

    const editTodo = (id, title) => {
        setEdit(id)
        setValue(title)
    }

    const saveTodo = (id) => {
        let newTodo = [...todos].map(todo => {
            if (todo.id == id) {
                todo.title = value
            }
            return todo
        })
        setTodos(newTodo)
        setEdit(null)
    }

    return (
        <TodosContext.Provider value={{
            toggleTodo, 
            removeTodo,
            addTodo,
            editTodo,
            edit,
            setEdit,
            value,
            setValue,
            saveTodo
        }}>
            <div>
                <h1>Заметки</h1>
                <Addtodo />
                {!todos.length 
                    ? <TodoWrapper style={{marginTop: 40}}>Нет запланированных дел</TodoWrapper> 
                    : <TodoList todos={todos}/>
                }
            </div>
        </TodosContext.Provider>
    )
}