import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation check
        if (!data.email || !data.password) {
            alert("Please enter both email and password.");
            return;
        }

        // Handle form submission logic here (e.g., API call)
        console.log("Form submitted:", data);
    };

    return (
        <div className="container mx-auto max-w-[1500px] px-6">
            <div className="bg-gray-100 mt-8 w-full max-w-md mx-auto p-6 rounded-lg shadow-md">
                <div className="flex justify-center font-bold text-2xl text-blue-600 mb-4">
                    Login
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="UserEmail" className="block text-xl font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="UserEmail"
                            placeholder="john@rhcp.com"
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-lg p-2"
                            name="email"
                            value={data.email}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="UserPassword" className="block text-xl font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="UserPassword"
                                placeholder="***********"
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-lg p-2"
                                name="password"
                                value={data.password}
                                onChange={handleOnChange}
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-600"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold text-xl p-3 rounded-md hover:bg-blue-400 transition-colors"
                    >
                        Log In
                    </button>
                    <div className="flex justify-between mt-4">
                        <Link to="/forgotpassword" className="text-blue-600 hover:underline">
                            Forgot Password
                        </Link>
                        <p>
                            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
