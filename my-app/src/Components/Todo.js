import React from 'react'
import { ACTIONS } from './UseReducerDemo'

export default function Todo({ todo, dispatch }) {

    function handleToggle() {
        dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
    }

    function handleDelete() {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
    }

    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }} >
                {todo.name}
            </span>
            <button className='btn btn-primary' onClick={handleToggle}>Toggle</button>
            <button className='btn btn-warning' onClick={handleDelete}>Delete</button>
        </div>
    )
}
