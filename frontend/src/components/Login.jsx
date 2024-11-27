// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
//     //         localStorage.setItem('token', data.token);
//     //         if (data.user.role === 'admin') navigate('/admin');
//     //         else navigate('/user');
//     //     } catch (error) {
//     //         console.error('Login failed', error.response.data.message);
//     //     }
//     // };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
//             localStorage.setItem('token', data.token);
//             alert('Login successful');
//             if (data.user.role === 'admin') navigate('/admin');
//             else navigate('/user');
//         } catch (error) {
//             console.error('Login failed:', error.response?.data?.message || error.message);
//         }
//     };
    

//     return (
//         <form className="max-w-md mx-auto mt-10 p-4 shadow-md" onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
//         </form>
//     );
// };

// export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
//             localStorage.setItem('token', data.token);
//             alert('Login successful');
//             if (data.user.role === 'admin') navigate('/admin');
//             else navigate('/user');
//         } catch (error) {
//             console.error('Login failed:', error.response?.data?.message || error.message);
//         }
//     };

//     return (
//         <form className="max-w-md mx-auto mt-10 p-4 shadow-md" onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <button type="submit" className="bg-blue-600 text-white px-4 py-2">Login</button>
//         </form>
//     );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
//             localStorage.setItem('token', data.token);
//             alert('Login successful');
//             if (data.user.role === 'admin') navigate('/admin');
//             else navigate('/user');
//         } catch (error) {
//             console.error('Login failed:', error.response?.data?.message || error.message);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//                 <div className="mb-4">
//                     <label className="block mb-2 font-medium">Email</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2 font-medium">Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//                 >
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;


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
            const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
            localStorage.setItem('token', data.token);
            alert('Login successful');
            if (data.user.role === 'admin') navigate('/admin');
            else navigate('/user');
        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
