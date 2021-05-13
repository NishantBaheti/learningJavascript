import React, { useState, useEffect } from "react";


export const UseEffectDemo = () => {

    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(resJson => setItems(resJson))

        return () => {
            console.log("this will do the cleanup");
        }
    }, [resourceType]);

    return (
        <div className="container-fluid">
            <h2>Use effect Demo</h2>
            <div>
                <button className="btn btn-primary" onClick={() => setResourceType('posts')}>Posts</button>
                <button className="btn btn-success" onClick={() => setResourceType('users')}>Users</button>
                <button className="btn btn-info" onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">{resourceType}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(items => {
                            return <tr><td>{JSON.stringify(items)}</td></tr>
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}