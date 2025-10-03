<!-- React Hooks Lists - There are so many hooks but these are the most used hooks -->

1. useEffect

👉 Side effects handle karne ke liye (API call, timer, DOM change).
--> Yeh render ke baad run hota hai. 
<!-- {Example} -->
import { useEffect, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Runs every time 'count' changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

2. useRef

👉 DOM elements ya variables ko directly reference karne ke liye.
--> Value change hone par re-render nahi hota.
<!-- Example -->
import { useRef } from "react";

function Example() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

3. useContext

👉 Props ko har component ke through pass karne ki jagah, context se data share karte hain.
<!-- Example -->
import { createContext, useContext } from "react";

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);
  return <h2>Hello {user}</h2>;
}

function Example() {
  return (
    <UserContext.Provider value="Rahul">
      <Child />
    </UserContext.Provider>
  );
}

4. useMemo

👉 Expensive calculation ko memoize karne ke liye (bar-bar calculate na ho).
--> Performance optimization ke liye use hota hai.
<!-- Example -->
import { useMemo, useState } from "react";

function Example() {
  const [num, setNum] = useState(5);

  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <>
      <p>Square: {squared}</p>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </>
  );
}

5. useCallback

👉 Function ko memoize karta hai (bar-bar new function banne se bachata hai).
--> Mostly child components ko props pass karte waqt use hota hai.
<!-- Example -->
import { useState, useCallback } from "react";

function Child({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}

function Example() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </>
  );
}

6. useReducer

👉 Jab state thoda complex ho jaata hai (multiple values ya conditions), tab useReducer use karte hain.
--> Ye Redux jaisa chhota version hai.
--> Isme ek reducer function hota hai jo state ko update karta hai action ke basis par.
<!-- Syntax -->
--> const [state, dispatch] = useReducer(reducer, initialState);
🔹state → current value
🔹dispatch(action) → state ko update karne ke liye action bhejte hain
🔹reducer(state, action) → decide karta hai naya state
<!-- Example: Counter with useReducer -->
import { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // useReducer(initial state = { count: 0 })
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button> <br/>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button> <br/>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button> 
    </>
  );
}

export default Counter;



⚡ Shortcut to Remember:

👉useEffect → Side effects (API call, event) <br/>
👉useRef → Reference (DOM/variable) <br/>
👉useContext → Global data sharing <br/>
👉useMemo → Save calculation result <br/>
👉useCallback → Save function 
