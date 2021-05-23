import React, { useState, useEffect } from 'react'

export const List = ({ getItems }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}
