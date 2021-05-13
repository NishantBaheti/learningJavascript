import React, { useState, useEffect, useMemo } from "react";


function slowFunction(number) {
  console.log("slow function called")
  for (let i = 0; i <= 10000000; i++) { }
  return number ** 2
}

export const UseMemoDemo = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log("theme changed")
    return () => {
      console.log("cleanup")
    }
  }, [themeStyles])


  return (
    <div className="container-fluid">
      <h2>Use Memo Demo</h2>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} ></input>
      <button className="btn btn-primary" onClick={() => setDark(prevDark => !prevDark)}> Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
};
