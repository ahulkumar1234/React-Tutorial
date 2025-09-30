import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
      const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    // useEffect(() => {
    // }, [form])


    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("newUser", JSON.stringify(form));
        setForm({ name: "", email: "", password: "" })
        // Handle signup logic here
        alert("Signup successful! Please login.");
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-white-700 mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            placeholder="Usename"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-white-700 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-white-700 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-5"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;