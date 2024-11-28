

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [newUserRow, setNewUserRow] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'user' });
    const [roleUpdate, setRoleUpdate] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token');
            const { data } = await axios.get('https://vrv-security-lup9.onrender.com/api/users', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleCreateUser = async () => {
        const token = localStorage.getItem('token');
        if (!newUser.name || !newUser.email || !newUser.password) {
            alert('All fields are required');
            return;
        }
        try {
            const { data } = await axios.post(
                'https://vrv-security-lup9.onrender.com/api/users/create',
                newUser,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            alert(data.message);
            setUsers((prevUsers) => [...prevUsers, data.user]); // Add the new user to the table
            setNewUserRow(false); // Hide the input row
            setNewUser({ name: '', email: '', password: '', role: 'user' }); // Reset input fields
        } catch (error) {
            alert(error.response?.data?.message || 'Error creating user');
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem('token');
        console.log('Users before deletion:', users); // Log current users
        console.log('Deleting User ID:', id); // Log ID to be deleted
    
        if (!id) {
            alert('Invalid user ID');
            return;
        }
    
        try {
            // Call the delete API
            const { data } = await axios.delete(`https://vrv-security-lup9.onrender.com/api/users/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
    
            alert(data.message);
    
            // Update the users state to remove the deleted user
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || 'Error deleting user');
        }
    };
    
    
    

    const handleRoleChange = (id, role) => {
        setRoleUpdate({ ...roleUpdate, [id]: role });
    };

    const updateRole = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await axios.put(
                `https://vrv-security-lup9.onrender.com/api/users/${id}`,
                { role: roleUpdate[id] },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Role updated successfully');
        } catch (error) {
            alert(error.response?.data?.message || 'Error updating role');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Password</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                            <td className="border p-2">Hidden</td>
                            <td className="border p-2">
                                {user.email === 'admin@gmail.com' ? (
                                    'Root Admin'
                                ) : (
                                    <select
                                        value={roleUpdate[user._id] || user.role}
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                )}
                            </td>
                            <td className="border p-2">
                                {user.email !== 'admin@gmail.com' && (
                                    <>
                                        <button
                                            onClick={() => updateRole(user._id)}
                                            className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-800"
                                        >
                                            Update Role
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="w-full bg-gradient-to-r from-red-900 to-red-600 text-white py-3 rounded-2xl font-semibold hover:from-red-500 hover:to-red-600 transition duration-800"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                    {newUserRow && (
                        <tr>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    className="p-2 border w-full"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    className="p-2 border w-full"
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={newUser.password}
                                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    className="p-2 border w-full"
                                />
                            </td>
                            <td className="border p-2">
                                <select
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    className="p-2 border w-full"
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td className="border p-2">
                                <button
                                    onClick={handleCreateUser}
                                    className="w-full bg-gradient-to-r from-green-900 to-green-600 text-white py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-green-800 transition duration-800"
                                >
                                    Add User
                                </button>
                                <button
                                    onClick={() => setNewUserRow(false)}
                                    className="bg-gray-600 text-white px-2 py-1 mx-1"
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {!newUserRow && (
                <button
                    onClick={() => setNewUserRow(true)}
                    className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-800 transition duration-800"
                >
                    + Add User
                </button>
            )}
        </div>
    );
};

export default AdminDashboard;
