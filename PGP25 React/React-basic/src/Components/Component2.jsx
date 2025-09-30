import React, { useState } from 'react'
function Component2(){

    const[color , setcolor] = useState("")

    const colorchange = ()=>{
        setcolor((prev)=> (prev === ""?"yellow":"cyan"));
    };
    return(
        <>
        <h1 style={{color:color}}>My name is component 2</h1>
        <button onClick={colorchange}>Button 2 from com 2 (chnage color)</button>
        </>
    )
}

export default Component2;