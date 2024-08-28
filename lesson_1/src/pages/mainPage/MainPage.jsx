import React, { useState } from "react";
import { Button, Checkbox, Container, IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../../store/TodoSlice";


const MainPage = () => {

    const dispatch = useDispatch()
    const todos = useSelector(state =>  state.todoReducer.todos)
    const [text, setText] = useState('')

    const handleButton = () => {
        if (text) {
            dispatch(addTodo(text))
            setText('') 
        } else {
            alert('Заполните поле')
        }
       
    }

    return (
        <Container>
            <h1>Todo list</h1>
            <TextField
                label='New Todo'
                variant="outlined"
                // value={text}
                onChange={e => setText(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="outlined" color="primary" onClick={handleButton}>
                Add Todo
            </Button>
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id}>
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo))}
                        />
                        <ListItemText primary={todo.text} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}/>
                        <IconButton edge='end' onClick={() => dispatch(deleteTodo(todo))}>
                          x
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            
        </Container>
    )
}

export default MainPage;