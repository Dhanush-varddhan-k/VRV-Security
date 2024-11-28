
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isDashboard = location.pathname === '/admin' || location.pathname === '/user';

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is missing');
            }

            // Notify the backend about logout
            await axios.post(
                'https://vrv-security-lup9.onrender.com/api/users/logout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            );

            // Clear the token from localStorage
            localStorage.removeItem('token');
            alert('Logged out successfully');
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error.response?.data?.message || error.message);
        }
    };

    // return (
    //     <nav className="bg-black text-white fixed top-0 w-full p-4 shadow-md z-50">
    //         <div className="container mx-auto flex justify-between items-center">
    //             <h1 className="text-xl font-bold">VRV Security</h1>
    //             <div className="flex space-x-4">
    //                 <Link to="/" className="hover:underline">
    //                     Home
    //                 </Link>
    //                 {!isDashboard && (
    //                     <>
    //                         <Link to="/login" className="hover:underline">
    //                             Login
    //                         </Link>
    //                         <Link to="/register" className="hover:underline">
    //                             Register
    //                         </Link>
    //                     </>
    //                 )}
    //                 {isDashboard && (
    //                     <button
    //                         onClick={handleLogout}
    //                         className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
    //                     >
    //                         Logout
    //                     </button>
    //                 )}
    //             </div>
    //         </div>
    //     </nav>
    // );

    return (
        <nav className="bg-black/50 text-white fixed top-0 w-full p-4 shadow-md z-50 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-[#ffffff]">VRV Security</h1>
                <div className="flex space-x-4">
                    <Link to="/" className="hover:underline text-white">
                        Home
                    </Link>
                    {!isDashboard && (
                        <>
                            <Link
                                to="/login"
                                className="hover: text-gray-200 hover:text-blue-400 transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="hover: text-gray-200 hover:text-blue-400 transition"
                            >
                                Register
                            </Link>
                        </>
                    )}
                    {isDashboard && (
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition text-white"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
    
};

export default Navbar;
