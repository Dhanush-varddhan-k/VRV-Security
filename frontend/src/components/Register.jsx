

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { ...formData, role: 'user' }; // Default role is user
            await axios.post('https://vrv-security-lup9.onrender.com/api/users/register', data);
            alert('Registration successful! Redirecting to login page.');
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Registration failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/earth5.jpg')" }}
    >
            <form className="max-w-md w-full p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
                <h2 className="text-4xl font-bold mb-6 text-center">Register</h2>
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                {/* <button type="submit" className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-800">Register</button> */}
                <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-500 ease-out"
>
    Register
</button>
            </form>
        </div>
    );
};

export default Register;
