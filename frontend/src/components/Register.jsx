// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         role: 'user',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:5000/api/users/register', formData);
//             alert('Registration successful!');
//         } catch (error) {
//             console.error('Registration failed', error.response.data.message);
//         }
//     };

//     return (
//         <form className="max-w-md mx-auto mt-10 p-4 shadow-md" onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-4">Register</h2>
//             <div className="mb-4">
//                 <label className="block mb-2">Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Role</label>
//                 <select
//                     name="role"
//                     value={formData.role}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                 >
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//             </div>
//             <button type="submit" className="bg-green-600 text-white px-4 py-2">Register</button>
//         </form>
//     );
// };

// export default Register;




// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = { ...formData, role: 'user' }; // Default role is user
//             await axios.post('http://localhost:5000/api/users/register', data);
//             alert('Registration successful!');
//         } catch (error) {
//             console.error('Registration failed', error.response.data.message);
//         }
//     };

//     return (
//         <form className="max-w-md mx-auto mt-10 p-4 shadow-md" onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-4">Register</h2>
//             <div className="mb-4">
//                 <label className="block mb-2">Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <button type="submit" className="bg-green-600 text-white px-4 py-2">Register</button>
//         </form>
//     );
// };

// export default Register;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });
//     const navigate = useNavigate(); // Hook for navigation

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = { ...formData, role: 'user' }; // Default role is user
//             await axios.post('http://localhost:5000/api/users/register', data);
//             alert('Registration successful! Redirecting to login page.');
//             navigate('/login'); // Redirect to login page
//         } catch (error) {
//             console.error('Registration failed:', error.response?.data?.message || error.message);
//         }
//     };

//     return (
//         <form className="max-w-md mx-auto mt-10 p-4 shadow-md" onSubmit={handleSubmit}>
//             <h2 className="text-2xl font-bold mb-4">Register</h2>
//             <div className="mb-4">
//                 <label className="block mb-2">Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full p-2 border"
//                     required
//                 />
//             </div>
//             <button type="submit" className="bg-green-600 text-white px-4 py-2">Register</button>
//         </form>
//     );
// };

// export default Register;


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
            await axios.post('http://localhost:5000/api/users/register', data);
            alert('Registration successful! Redirecting to login page.');
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Registration failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="max-w-md w-full p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Register</button>
            </form>
        </div>
    );
};

export default Register;
