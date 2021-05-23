import React, { useReducer, useState } from 'react'

import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}


function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

function reducer(todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}


export const UseReducerDemo = () => {

    const [todos, dispatch] = useReducer(reducer, [])

    const [name, setName] = useState(' ')

    function handleSubmit(e) {

        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName(' ')
    }

    return (
        <div className='container-fluid'>
            <h2>Use Reducer Demo</h2>
            <form className='d-flex' onSubmit={handleSubmit}>
                <input className='form-control me-2' type='text' value={name} onChange={e => setName(e.target.value)} />
            </form>
            <div className='container'>
                {todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                })}
            </div>
        </div>
    )
}


// // simple example for reducer
// const ACTIONS = {
//     INCREMENT: 'increment',
//     DECREMENT: 'decrement'
// }


// function reducer(state, action) {
//     switch (action.type) {
//         case ACTIONS.INCREMENT:
//             return { count: state.count + 1 }
//         case ACTIONS.DECREMENT:
//             return { count: state.count - 1 }
//         default:
//             return state
//     }
// }


// export const UseReducerDemo = () => {

//     const [state, dispatch] = useReducer(reducer, { count: 0 })

//     function increment() {
//         dispatch({ type: ACTIONS.INCREMENT })
//     }

//     function decrement() {
//         dispatch({ type: ACTIONS.DECREMENT })
//     }


//     return (
//         <div className='container-fluid'>
//             <h2>Use Reducer Demo</h2>
//             <button className='btn btn-primary' onClick={increment}> + </button>
//             <span>{state.count}</span>
//             <button className='btn btn-primary' onClick={decrement}> - </button>
//         </div>
//     )
// }