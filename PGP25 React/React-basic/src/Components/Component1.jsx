import { useState } from "react";



function Component1() {

    const [color , setcolor ]= useState("white");
    const colorchange = () => {
        setcolor((prev)=>(prev === "white" ? "green" : "blue"))
    }
    return (
        <>
            <h1 style={{color:color}}>My name is Component 1</h1>
            <button onClick={colorchange}>Button 1 from com 1 (change color)</button>
        </>
    );
}

export default Component1;