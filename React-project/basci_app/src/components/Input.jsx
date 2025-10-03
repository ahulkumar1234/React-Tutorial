import React from 'react'
import { useState, useEffect } from 'react'

const Input = () => {

    const [value, setValue] = useState("")
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    })

    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const taskcomplete = (idx) => {
        const updated = tasks.map((task, i) => {
            i === idx ? { ...task, completed: !task.completed } : task
            setIsComplete (updated)
        })
    }

    const handler = (e) => {
        setValue(e.target.value)
    }
    const submithandler = () => {
        if (value.trim() === "") return;
        setTasks([...tasks, value])
        setValue("");
    }
    const deletehandler = (idx) => {
        setTasks(tasks.filter((_, i) => i !== idx))
    }
    return (
        <>
            <div className="input mt-10 flex justify-center">
                <input onChange={handler} type="text" value={value} placeholder='Enter Your Task' className='p-4 w-1/2 border border-gray-600 rounded' />
                <button onClick={submithandler} className='bg-green-600 px-5 mx-2 rounded font-semibold hover:bg-green-700 transition-all cursor-pointer'>Add</button>
            </div>
            {/* <p className='mt-5'>{value}</p> */}
            <div className='flex justify-center h-50 '>
                <ul className="w-full p-5">
                    <h1 className='flex justify-center items-center text-2xl font-semibold'>Tasks List</h1>
                    {
                        tasks.map((task, idx) => (
                            <li onClick={()=>{taskcomplete(idx)}} className={`mt-2 flex justify-between p-2 border border-gray-700 rounded ${task.completed ? "line-through text-gray-500" : ""}`} key={idx}>{task} <button className="text-white-600 font-bold bg-red-600 p-1 rounded cursor-pointer hover:bg-red-700 transition-all" onClick={() => deletehandler(idx)}>Delete</button></li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Input