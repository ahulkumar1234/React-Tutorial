import { Link } from 'react-router-dom'
import { useState } from 'react'

const Forgetpass = () => {

    const [email, setemail] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");


    const handlereset = (e) => {
        e.preventDefault()

        if (newpassword !== confirmpassword) {
            alert("Passwords do not match ❌");
            return;
        }
        const saveduser = localStorage.getItem("newUser")

        if (saveduser) {
            const user = JSON.parse(saveduser);
            if (user.email === email) {
                user.password = newpassword;
                localStorage.setItem("newUser", JSON.stringify(user));
                alert("Password reset successful ✅ Now login with new password.");
                //reset form
                setemail("");
                setnewpassword("");
                setconfirmpassword("");
            } else {
                alert("Email not found ❌");
            }
        } else {
            alert("No user found, please sign up first!");
        }

    };


    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">
                        Reset Password
                    </h2>
                    <form className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* New Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                New Password
                            </label>
                            <input
                                value={newpassword}
                                onChange={(e) => setnewpassword(e.target.value)}
                                name="password"
                                type="text"
                                placeholder="Enter new password"
                                className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Confirm Password
                            </label>
                            <input
                                value={confirmpassword}
                                onChange={(e) => setconfirmpassword(e.target.value)}
                                name="password"
                                type="password"
                                placeholder="Confirm new password"
                                className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handlereset}
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                        >
                            Reset Password
                        </button>
                        <Link
                            to="/"
                            className="text-blue-400 hover:underline block mt-4 transition-all"
                        >
                            ← Back to Login
                        </Link>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Forgetpass