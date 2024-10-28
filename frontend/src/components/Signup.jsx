import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SummaryApi from '../common';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword){
            const dataResponse = await fetch(SummaryApi.signup.url,{
                method : SummaryApi.signup.method,
                header :{
                    "content-type": "application/json"
                },
                body : JSON.stringify(formData)
            })
    
            const formDataApi = await dataResponse.json();
    
            console.log('data', formDataApi);  
        }
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Handle form submission logic (e.g., API call)
        console.log("Form data submitted:", formData);
    };

    return (
        <div className="container mx-auto max-w-[1500px] px-6 " >
            <div className="bg-gray-100 mt-8 w-full max-w-md mx-auto p-6 rounded-lg shadow-md mb-6">
                <div className="flex justify-center font-bold text-xl text-blue-600 mb-4">
                    Sign Up
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="UserName" className="block text-lg font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="UserName"
                            placeholder="John Doe"
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-lg p-2"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="UserEmail" className="block text-lg font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="UserEmail"
                            placeholder="john@rhcp.com"
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-lg p-2"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="UserPassword" className="block text-lg font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="UserPassword"
                                placeholder="***********"
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-lg p-2"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-gray-600"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="ConfirmPassword" className="block text-lg font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="ConfirmPassword"
                                placeholder="***********"
                                className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-lg p-2"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
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
                        Sign Up
                    </button>
                    <div className="flex justify-between mt-4">
                        <p>
                            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
