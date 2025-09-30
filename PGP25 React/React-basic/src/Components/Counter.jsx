import { useState } from "react";

function Counter() {

    const inhandler = () => {
        setCount((prev) => prev + 1);
    }
    const dehandler = () => {
        setCount((prev) => prev - 1);
    }
    const reset = () => {
        setCount(0)
    }
    const [count, setCount] = useState(0);


    return (
        <>
            <p style={{margin : "50px"}}>I am a Counter App</p>
            <h1 style={{ color: count < 0 ? "red" : "white" }}>{count}</h1>

            <button onClick={inhandler}>Increase</button>
            <button onClick={dehandler}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter
