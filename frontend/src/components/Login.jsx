

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('https://vrv-security-lup9.onrender.com/api/users/login', { email, password });
            localStorage.setItem('token', data.token);
            alert('Login successful');
            if (data.user.role === 'admin') navigate('/admin');
            else navigate('/user');
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        // <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
        // style={{ backgroundImage: `url('/earth5.jpg')`,zIndex: -1 }}>
        <div
        className="flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/earth5.jpg')`,zIndex: -1, opacity: 0.95 }}
    >
            <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h2 className="font-serif font-bold text-black text-4xl text-center">Log in</h2>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        required
                    />
                </div>
                {/* <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button> */}
                <button
    type="submit"
    className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-800"
>
    Login
</button>

            </form>
        </div>
    );
};

export default Login;
