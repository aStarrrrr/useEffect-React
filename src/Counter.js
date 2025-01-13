// import React,{useState,useEffect} from 'react'

// function Counter() {
//     useEffect(()=>{
//         console.log("Its mounting ....");
//         return()=>{
//             console.log("Its unmounting ....");
//         }
//     },[])
//     const [count,setCount] = useState(0)
//     return (
//         <div>
//             <button onClick={()=>setCount(count+1)}>Incriment</button>
//             <h1>Hellow iam a counter : {count}</h1>
//         </div>
//     )
// }

// export default Counter


import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log("It's mounting ....");
        console.log("1 -count : " + count)
        console.log("2 -count : " + count2)
        // return () => {
        //     console.log("Clean up - " + count);
        // };
    }, [count,count2]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Hello, I am a counter: {count}</h1>
            <button onClick={() => setCount2(count2 + 1)}>Increment</button>
            <h1>Hello, I am a counter two: {count2}</h1>
        </div>
    );
}

export default Counter;