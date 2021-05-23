import React from "react";
import { useTheme, useThemeUpdate } from './ThemeContext';

export const UseContextDemo = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        marging: '2rem',
        height: '10rem',
        width: '15rem'
    }

    return (
        <>
            <div style={themeStyles} className="container-fluid">
                <h2>Use Context Demo</h2>
            </div>
            <button className='btn btn-primary' onClick={toggleTheme}>Change Theme</button>
        </>
    )
}