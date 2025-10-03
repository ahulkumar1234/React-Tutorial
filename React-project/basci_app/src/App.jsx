import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/input';

function App() {

  const [mode, setMode] = useState("white");

  // UseEffect Exapmples
  // 1.) Render only once First time when page load
  useEffect(() => {
    console.log("Renderd 1 Time")
  }, [])
  // 2.) Renderd every Time whenever page load or any event happening
  useEffect(() => {
    console.log("Renderd every Time")
  })
  // 3.) Renderd when any specific changes happend || as the below example when mode changes only then it renderd
  useEffect(() => {
    console.log("Renderd only when mode change")
  }, [mode])


  const handler = () => {
    setMode(mode === "white" ? "black" : "white")
  }

  return (
    <>
      <div
        className={`container border w-[100%] h-96 rounded-lg ${mode === "white" ? "bg-black text-white" : "bg-white text-black"}`}>
        <h1 className='my-5 text-5xl font-bold'>My Name is Rahul</h1>
        <p>I am a passionate and aspiring web developer and I am currently learning Web Development in MERN stack</p>
        <button onClick={handler} className='my-5 bg-green-600 p-2 rounded cursor-pointer hover:bg-green-700 transition-all font-semibold'>
          {mode === "white" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
      <Input />
    </>
  )
}

export default App;
