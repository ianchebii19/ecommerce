import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation to ensure email is entered
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        // Password recovery logic (e.g., API call to send reset link)
        console.log("Password reset request sent for:", email);
    };

    return (
        <div className="container mx-auto max-w-[1500px] px-6">
            <div className="bg-gray-100 mt-8 w-full max-w-md mx-auto p-6 rounded-lg shadow-md">
                <div className="flex justify-center font-bold text-xl text-blue-600 mb-4">
                    Forgot Password
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="UserEmail" className="block text-xl font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="UserEmail"
                            placeholder="Enter your email"
                            className="mt-1 w-full rounded-md border-gray-300 shadow-sm text-lg p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold text-xl p-3 rounded-md hover:bg-blue-400 transition-colors"
                    >
                        Send Reset Link
                    </button>

                    <div className="flex justify-center mt-4">
                        <Link to="/login" className="text-blue-600 hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
