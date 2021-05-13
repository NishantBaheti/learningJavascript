import React, { useState } from "react";

export const UseStateDemo = () => {

    const [count, setCount] = useState(0);

    // either maintain it separately or put it in a object 
    const [state, setState] = useState(() => {
        console.log("this will run only once the page is loaded")
        return { count: 0 , lastOperation : null }
    })

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    function decrementCount(){
        setCount(prevCount => prevCount - 1);
    }

    function incUpdateObject(){
        setState(prevState => {
            return { ...prevState,count: prevState.count + 1, lastOperation : 'inc'}
        });
    }

    function decUpdateObject(){
        setState(prevState => {
            return { ...prevState,count: prevState.count - 1, lastOperation : 'dec'}
        });
    }

    return (
        <div className="container-fluid">
            <h2>Use State Demo</h2> 
            <div className="container">
                <button className="btn btn-primary" onClick={incrementCount}>ADD</button>
                <span> Count : {count} </span> 
                <button className="btn btn-primary" onClick={decrementCount}>SUB</button>
            </div>
            <div className="container">
                <button className="btn btn-primary" onClick={incUpdateObject}>ADD</button>
                <span> Count : {state.count} | Last Operation : {state.lastOperation} </span>
                <button className="btn btn-primary" onClick={decUpdateObject}>SUB</button>
            </div>
        </div>
    )
}
