import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    // useEffect(() => {
    // }, [input])


    const handler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };


    const submithandler = (e) => {
        e.preventDefault();

        const savedUser = localStorage.getItem("newUser");

        if (savedUser) {
            const { name , password } = JSON.parse(savedUser);

            if (input.username === name && input.password === password) {
                localStorage.setItem("user", JSON.stringify(input)); 
                navigate("/dashboard");
            } else {
                alert("Invalid username or password ❌");
            }
        } else {
            alert("No user found! Please sign up first.");
            navigate("/signup");
        }
        setInput({ username: "", password: "", })
    };

    return (

        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {/* ✅ Use form */}
                <form
                    onSubmit={submithandler}
                    className="space-y-4"
                >
                    <label className="flex justify-start items-center">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handler}
                        placeholder="Username"
                        value={input.username}
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label className="flex justify-start items-center">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handler}
                        placeholder="Password"
                        value={input.password}
                        className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* ✅ Submit button inside form */}
                    <button
                        type="submit"
                        className="bg-blue-600 p-2 rounded hover:bg-blue-700 cursor-pointer transition-all w-full mt-4"
                    >
                        Submit
                    </button>

                    <Link to="/forgetpassword" className="flex justify-end mt-1 text-blue-400">
                        Forgot Password?
                    </Link>

                    <div className="signup mt-10">
                        <p>
                            Not a member yet? <Link to="/signup" className="text-blue-400">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;
