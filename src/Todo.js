import React from 'react'
import CheckBox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <FormControlLabel control={
                <CheckBox sx={{fontSize: 35}} color="secondary" size='large' checked={todo.Status} onChange={handleTodoClick}/>
            } label={todo.Name}/>
        </div>
    )
}
