import React, { useState, useCallback } from 'react'
import { List } from './List'

export const UseCallbackDemo = () => {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div className='container-fluid' style={theme}>
            <h2>Use Callback Demo</h2>
            <input type='number' className='form-control me-2' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button className='btn btn-primary' onClick={() => setDark(prevDark => !prevDark)} >Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    )
}
