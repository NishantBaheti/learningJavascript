import React, { useState, useEffect, useRef } from "react";


// // this will create infinte loop
// export const UseRefDemo = () =>{
//     const [name, setName] = useState(' ')
//     const [renderCount, setRenderCount] = useState(0)

//     useEffect(() => {
//         setRenderCount(prevRenderCount => prevRenderCount + 1 )  
//     })

//     return (
//         <div className="container-fluid">
//             <h2>Use Ref Demo</h2>

//             <input value={name} onChange={e => setName(e.target.value) } />
//             <div> My Name is {name} </div>
//             <div>I rendered {renderCount}</div>
//         </div>
//     )
// }


export const UseRefDemo = () => {

    const [name, setName] = useState(' ')
    const renderCount = useRef(0)
    const inputRef = useRef()

    function focus() {
        inputRef.current.focus()
    }

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })
    
    return (
        <div className="container-fluid">
            <h2>Use Ref Demo</h2>

            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div> My Name is {name} </div>
            <div>It rendered {renderCount.current}</div>
            <button className="btn btn-primary" onClick={focus}>focus on input field</button>
        </div>
    )
}