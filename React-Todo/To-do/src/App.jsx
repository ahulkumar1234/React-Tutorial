import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a task");
      return;
    }
    const updated = [...tasks, input];
    setTasks(updated);
    setInput('');
    setError('');
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <Router>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Todo App */}
      <form onSubmit={handlerSubmit}>
        <div className="main flex justify-center items-center my-10 border border-gray-300 shadow-lg rounded-lg p-4 w-3/5 mx-auto">
          <input
            className="p-1.5 px-5 w-full border border-gray-400 rounded-md"
            type="text"
            placeholder="Write your task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-700 p-1.5 px-3 rounded-md text-white font-bold mx-1 cursor-pointer hover:bg-green-900 transition-all"
          >
            Save
          </button>
        </div>
      </form>

      {error && <h1 className="text-red-600 text-center text-xl">{error}</h1>}

      <div className="task-container w-3/5 mx-auto">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="task flex justify-between items-center border border-gray-300 shadow-lg rounded-lg p-4 my-4"
          >
            <h1 className="font-bold text-md">{task}</h1>
            <div className="button">
              <button className="bg-blue-700 p-1.5 px-3 rounded-md text-white font-bold mx-1 cursor-pointer hover:bg-blue-900 transition-all">
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-700 p-1.5 px-3 rounded-md text-white font-bold mx-1 cursor-pointer hover:bg-red-900 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </Router>
  );
}

export default App;
