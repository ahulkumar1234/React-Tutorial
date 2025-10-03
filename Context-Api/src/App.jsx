import './App.css'
import GrandChild from './component/GrandChild';
import { createContext } from 'react'

export const data = createContext();


function App() {

  const Emp = [
    {
      name: "Rahul",
      age: "24",
    },
    {
      name: "Ajay",
      age: "23",
    },
    {
      name: "Kajal",
      age: "20",
    },
    {
      name: "Adwita",
      age: "19",
    }
  ]

  return (
    <>
      <data.Provider value={Emp}>
        <GrandChild />
      </data.Provider>
    </>
  )
}

export default App
