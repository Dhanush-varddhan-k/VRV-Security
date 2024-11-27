// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="bg-gray-800 text-white p-4 flex justify-between">
//             <h1 className="text-xl font-bold">VRV Security</h1>
//             <div>
//                 <Link to="/" className="mx-2">Home</Link>
//                 <Link to="/login" className="mx-2">Login</Link>
//                 <Link to="/register" className="mx-2">Register</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = () => {
//     const location = useLocation();
//     const isDashboard = location.pathname === '/admin' || location.pathname === '/user';

//     const handleLogout = async () => {
//         try {
//             await axios.post('http://localhost:5000/api/users/logout', {}, {
//                 withCredentials: true,
//             });
//             localStorage.removeItem('token');
//             alert('Logged out successfully');
//             window.location.href = '/login'; // Redirect to login page
//         } catch (error) {
//             console.error('Logout failed:', error.response?.data?.message || error.message);
//         }
//     };

//     return (
//         <nav className="bg-gray-800 text-white p-4 flex justify-between">
//             <h1 className="text-xl font-bold">VRV Security</h1>
//             <div>
//                 <Link to="/" className="mx-2">Home</Link>
//                 {!isDashboard && <Link to="/login" className="mx-2">Login</Link>}
//                 {!isDashboard && <Link to="/register" className="mx-2">Register</Link>}
//                 {isDashboard && (
//                     <button
//                         onClick={handleLogout}
//                         className="mx-2 bg-red-600 px-3 py-1 rounded"
//                     >
//                         Logout
//                     </button>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const isDashboard = location.pathname === '/admin' || location.pathname === '/user';

    


//     const handleLogout = async () => {
//         try {
//             const token = localStorage.getItem('token'); // Retrieve token from localStorage
//             if (!token) {
//                 throw new Error('Token is missing');
//             }
    
//             // Notify the backend about logout
//             await axios.post(
//                 'http://localhost:5000/api/users/logout',
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`, // Add the token to the Authorization header
//                     },
//                     withCredentials: true,
//                 }
//             );
    
//             // Clear the token from localStorage
//             localStorage.removeItem('token');
//             alert('Logged out successfully');
            
//             // Redirect to the home page
//             navigate('/');
//         } catch (error) {
//             console.error('Logout failed:', error.response?.data?.message || error.message);
//         }
//     };
    

//     return (
//         <nav className="bg-gray-800 text-white p-4 flex justify-between">
//             <h1 className="text-xl font-bold">VRV Security</h1>
//             <div>
//                 <Link to="/" className="mx-2">Home</Link>
//                 {!isDashboard && <Link to="/login" className="mx-2">Login</Link>}
//                 {!isDashboard && <Link to="/register" className="mx-2">Register</Link>}
//                 {isDashboard && (
//                     <button
//                         onClick={handleLogout}
//                         className="mx-2 bg-red-600 px-3 py-1 rounded"
//                     >
//                         Logout
//                     </button>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


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
                'http://localhost:5000/api/users/logout',
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

    return (
        <nav className="bg-black text-white fixed top-0 w-full p-4 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">VRV Security</h1>
                <div className="flex space-x-4">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    {!isDashboard && (
                        <>
                            <Link to="/login" className="hover:underline">
                                Login
                            </Link>
                            <Link to="/register" className="hover:underline">
                                Register
                            </Link>
                        </>
                    )}
                    {isDashboard && (
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
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
