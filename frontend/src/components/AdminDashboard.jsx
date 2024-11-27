// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const token = localStorage.getItem('token');
//             const { data } = await axios.get('http://localhost:5000/api/users', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(data);
//         };
//         fetchUsers();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.delete(`http://localhost:5000/api/users/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(users.filter((user) => user._id !== id));
//         } catch (error) {
//             console.error('Delete failed', error.response.data.message);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
//             <table className="w-full border">
//                 <thead>
//                     <tr>
//                         <th className="border p-2">Name</th>
//                         <th className="border p-2">Email</th>
//                         <th className="border p-2">Role</th>
//                         <th className="border p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td className="border p-2">{user.name}</td>
//                             <td className="border p-2">{user.email}</td>
//                             <td className="border p-2">{user.role}</td>
//                             <td className="border p-2">
//                                 <button
//                                     onClick={() => handleDelete(user._id)}
//                                     className="bg-red-600 text-white px-2 py-1"
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [roleUpdate, setRoleUpdate] = useState({});

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const token = localStorage.getItem('token');
//             const { data } = await axios.get('http://localhost:5000/api/users', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(data);
//         };
//         fetchUsers();
//     }, []);

//     const handleDelete = async (id) => {
//         const token = localStorage.getItem('token');
//         const currentUser = JSON.parse(localStorage.getItem('user'));

//         if (currentUser.id === id) {
//             alert('You cannot delete yourself!');
//             return;
//         }

//         try {
//             await axios.delete(`http://localhost:5000/api/users/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(users.filter((user) => user._id !== id));
//         } catch (error) {
//             console.error('Delete failed', error.response.data.message);
//         }
//     };

//     const handleRoleChange = (id, role) => {
//         setRoleUpdate({ ...roleUpdate, [id]: role });
//     };

//     const updateRole = async (id) => {
//         const token = localStorage.getItem('token');
//         try {
//             await axios.put(
//                 `http://localhost:5000/api/users/${id}`,
//                 { role: roleUpdate[id] },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert('Role updated successfully');
//         } catch (error) {
//             console.error('Role update failed', error.response.data.message);
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
//             <table className="w-full border">
//                 <thead>
//                     <tr>
//                         <th className="border p-2">Name</th>
//                         <th className="border p-2">Email</th>
//                         <th className="border p-2">Role</th>
//                         <th className="border p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td className="border p-2">{user.name}</td>
//                             <td className="border p-2">{user.email}</td>
//                             <td className="border p-2">
//                                 {user.email === 'admin@gmail.com' ? (
//                                     'Root Admin'
//                                 ) : (
//                                     <select
//                                         value={roleUpdate[user._id] || user.role}
//                                         onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                                     >
//                                         <option value="user">User</option>
//                                         <option value="admin">Admin</option>
//                                     </select>
//                                 )}
//                             </td>
//                             <td className="border p-2">
//                                 {user.email !== 'admin@gmail.com' && (
//                                     <>
//                                         <button
//                                             onClick={() => updateRole(user._id)}
//                                             className="bg-blue-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Update Role
//                                         </button>
//                                         <button
//                                             onClick={() => handleDelete(user._id)}
//                                             className="bg-red-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Delete
//                                         </button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'user' });
//     const [roleUpdate, setRoleUpdate] = useState({});

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const token = localStorage.getItem('token');
//             const { data } = await axios.get('http://localhost:5000/api/users', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(data);
//         };
//         fetchUsers();
//     }, []);

//     const handleCreateUser = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');

//         try {
//             const { data } = await axios.post(
//                 'http://localhost:5000/api/users/create',
//                 newUser,
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             alert(data.message);
//             setNewUser({ name: '', email: '', password: '', role: 'user' }); // Reset form
//             setUsers((prevUsers) => [...prevUsers, { ...newUser, _id: Date.now() }]); // Add new user to the list
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error creating user');
//         }
//     };

//     const handleDelete = async (id) => {
//         const token = localStorage.getItem('token');
//         const currentUser = JSON.parse(localStorage.getItem('user'));

//         if (currentUser.id === id) {
//             alert('You cannot delete yourself!');
//             return;
//         }

//         try {
//             await axios.delete(`http://localhost:5000/api/users/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(users.filter((user) => user._id !== id));
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error deleting user');
//         }
//     };

//     const handleRoleChange = (id, role) => {
//         setRoleUpdate({ ...roleUpdate, [id]: role });
//     };

//     const updateRole = async (id) => {
//         const token = localStorage.getItem('token');
//         try {
//             await axios.put(
//                 `http://localhost:5000/api/users/${id}`,
//                 { role: roleUpdate[id] },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert('Role updated successfully');
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error updating role');
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

//             {/* Create User Form */}
//             <form onSubmit={handleCreateUser} className="mb-8 p-4 border shadow-md">
//                 <h3 className="text-xl font-bold mb-4">Create User</h3>
//                 <div className="mb-4">
//                     <label className="block mb-2">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={newUser.name}
//                         onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                         className="w-full p-2 border"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={newUser.email}
//                         onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//                         className="w-full p-2 border"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={newUser.password}
//                         onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//                         className="w-full p-2 border"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block mb-2">Role</label>
//                     <select
//                         name="role"
//                         value={newUser.role}
//                         onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//                         className="w-full p-2 border"
//                     >
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                     </select>
//                 </div>
//                 <button type="submit" className="bg-green-600 text-white px-4 py-2">Create User</button>
//             </form>

//             {/* Users Table */}
//             <table className="w-full border">
//                 <thead>
//                     <tr>
//                         <th className="border p-2">Name</th>
//                         <th className="border p-2">Email</th>
//                         <th className="border p-2">Role</th>
//                         <th className="border p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td className="border p-2">{user.name}</td>
//                             <td className="border p-2">{user.email}</td>
//                             <td className="border p-2">
//                                 {user.email === 'admin@gmail.com' ? (
//                                     'Root Admin'
//                                 ) : (
//                                     <select
//                                         value={roleUpdate[user._id] || user.role}
//                                         onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                                     >
//                                         <option value="user">User</option>
//                                         <option value="admin">Admin</option>
//                                     </select>
//                                 )}
//                             </td>
//                             <td className="border p-2">
//                                 {user.email !== 'admin@gmail.com' && (
//                                     <>
//                                         <button
//                                             onClick={() => updateRole(user._id)}
//                                             className="bg-blue-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Update Role
//                                         </button>
//                                         <button
//                                             onClick={() => handleDelete(user._id)}
//                                             className="bg-red-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Delete
//                                         </button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AdminDashboard;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [newUserRow, setNewUserRow] = useState(false);
//     const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'user' });
//     const [roleUpdate, setRoleUpdate] = useState({});

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const token = localStorage.getItem('token');
//             const { data } = await axios.get('http://localhost:5000/api/users', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(data);
//         };
//         fetchUsers();
//     }, []);

//     const handleCreateUser = async () => {
//         const token = localStorage.getItem('token');
//         if (!newUser.name || !newUser.email || !newUser.password) {
//             alert('All fields are required');
//             return;
//         }
//         try {
//             const { data } = await axios.post(
//                 'http://localhost:5000/api/users/create',
//                 newUser,
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             alert(data.message);
//             setUsers((prevUsers) => [...prevUsers, { ...newUser, _id: Date.now() }]); // Update table
//             setNewUserRow(false); // Hide the input row
//             setNewUser({ name: '', email: '', password: '', role: 'user' }); // Reset input fields
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error creating user');
//         }
//     };

//     const handleDelete = async (id) => {
//         const token = localStorage.getItem('token');
//         const currentUser = JSON.parse(localStorage.getItem('user'));

//         if (currentUser.id === id) {
//             alert('You cannot delete yourself!');
//             return;
//         }

//         try {
//             await axios.delete(`http://localhost:5000/api/users/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(users.filter((user) => user._id !== id));
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error deleting user');
//         }
//     };

//     const handleRoleChange = (id, role) => {
//         setRoleUpdate({ ...roleUpdate, [id]: role });
//     };

//     const updateRole = async (id) => {
//         const token = localStorage.getItem('token');
//         try {
//             await axios.put(
//                 `http://localhost:5000/api/users/${id}`,
//                 { role: roleUpdate[id] },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert('Role updated successfully');
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error updating role');
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
//             <table className="w-full border">
//                 <thead>
//                     <tr>
//                         <th className="border p-2">Name</th>
//                         <th className="border p-2">Email</th>
//                         <th className="border p-2">Role</th>
//                         <th className="border p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td className="border p-2">{user.name}</td>
//                             <td className="border p-2">{user.email}</td>
//                             <td className="border p-2">
//                                 {user.email === 'admin@gmail.com' ? (
//                                     'Root Admin'
//                                 ) : (
//                                     <select
//                                         value={roleUpdate[user._id] || user.role}
//                                         onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                                     >
//                                         <option value="user">User</option>
//                                         <option value="admin">Admin</option>
//                                     </select>
//                                 )}
//                             </td>
//                             <td className="border p-2">
//                                 {user.email !== 'admin@gmail.com' && (
//                                     <>
//                                         <button
//                                             onClick={() => updateRole(user._id)}
//                                             className="bg-blue-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Update Role
//                                         </button>
//                                         <button
//                                             onClick={() => handleDelete(user._id)}
//                                             className="bg-red-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Delete
//                                         </button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                     {/* Add new user row */}
//                     {newUserRow && (
//                         <tr>
//                             <td className="border p-2">
//                                 <input
//                                     type="text"
//                                     placeholder="Name"
//                                     value={newUser.name}
//                                     onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                                     className="p-2 border w-full"
//                                 />
//                             </td>
//                             <td className="border p-2">
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     value={newUser.email}
//                                     onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//                                     className="p-2 border w-full"
//                                 />
//                             </td>
//                             <td className="border p-2">
//                                 <select
//                                     value={newUser.role}
//                                     onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//                                     className="p-2 border w-full"
//                                 >
//                                     <option value="user">User</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                             </td>
//                             <td className="border p-2">
//                                 <button
//                                     onClick={handleCreateUser}
//                                     className="bg-green-600 text-white px-2 py-1 mx-1"
//                                 >
//                                     Add User
//                                 </button>
//                                 <button
//                                     onClick={() => setNewUserRow(false)}
//                                     className="bg-gray-600 text-white px-2 py-1 mx-1"
//                                 >
//                                     Cancel
//                                 </button>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//             {/* Add User Button */}
//             {!newUserRow && (
//                 <button
//                     onClick={() => setNewUserRow(true)}
//                     className="bg-blue-600 text-white px-4 py-2 mt-4"
//                 >
//                     + Add User
//                 </button>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//     const [users, setUsers] = useState([]);
//     const [newUserRow, setNewUserRow] = useState(false);
//     const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: 'user' });
//     const [roleUpdate, setRoleUpdate] = useState({});

//     useEffect(() => {
//         const fetchUsers = async () => {
//             const token = localStorage.getItem('token');
//             const { data } = await axios.get('http://localhost:5000/api/users', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setUsers(data);
//         };
//         fetchUsers();
//     }, []);

//     const handleCreateUser = async () => {
//         const token = localStorage.getItem('token');
//         if (!newUser.name || !newUser.email || !newUser.password) {
//             alert('All fields are required');
//             return;
//         }
//         try {
//             const { data } = await axios.post(
//                 'http://localhost:5000/api/users/create',
//                 newUser,
//                 {
//                     headers: { Authorization: `Bearer ${token}` },
//                 }
//             );
//             alert(data.message);
//             setUsers((prevUsers) => [...prevUsers, { ...newUser, _id: Date.now() }]); // Update table
//             setNewUserRow(false); // Hide the input row
//             setNewUser({ name: '', email: '', password: '', role: 'user' }); // Reset input fields
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error creating user');
//         }
//     };

//     const handleDelete = async (id) => {
//         const token = localStorage.getItem('token');
//         const currentUser = JSON.parse(localStorage.getItem('user'));
    
//         if (currentUser.id === id) {
//             alert('You cannot delete yourself!');
//             return;
//         }
    
//         try {
//             const { data } = await axios.delete(`http://localhost:5000/api/users/${id}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             alert(data.message); // Show success message
//             setUsers(users.filter((user) => user._id !== id)); // Remove user from the state
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error deleting user');
//         }
//     };
    

//     const handleRoleChange = (id, role) => {
//         setRoleUpdate({ ...roleUpdate, [id]: role });
//     };

//     const updateRole = async (id) => {
//         const token = localStorage.getItem('token');
//         try {
//             await axios.put(
//                 `http://localhost:5000/api/users/${id}`,
//                 { role: roleUpdate[id] },
//                 { headers: { Authorization: `Bearer ${token}` } }
//             );
//             alert('Role updated successfully');
//         } catch (error) {
//             alert(error.response?.data?.message || 'Error updating role');
//         }
//     };

//     return (
//         <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
//             <table className="w-full border">
//                 <thead>
//                     <tr>
//                         <th className="border p-2">Name</th>
//                         <th className="border p-2">Email</th>
//                         <th className="border p-2">Password</th>
//                         <th className="border p-2">Role</th>
//                         <th className="border p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td className="border p-2">{user.name}</td>
//                             <td className="border p-2">{user.email}</td>
//                             <td className="border p-2">Hidden</td> {/* Hide password for existing users */}
//                             <td className="border p-2">
//                                 {user.email === 'admin@gmail.com' ? (
//                                     'Root Admin'
//                                 ) : (
//                                     <select
//                                         value={roleUpdate[user._id] || user.role}
//                                         onChange={(e) => handleRoleChange(user._id, e.target.value)}
//                                     >
//                                         <option value="user">User</option>
//                                         <option value="admin">Admin</option>
//                                     </select>
//                                 )}
//                             </td>
//                             <td className="border p-2">
//                                 {user.email !== 'admin@gmail.com' && (
//                                     <>
//                                         <button
//                                             onClick={() => updateRole(user._id)}
//                                             className="bg-blue-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Update Role
//                                         </button>
//                                         <button
//                                             onClick={() => handleDelete(user._id)}
//                                             className="bg-red-600 text-white px-2 py-1 mx-1"
//                                         >
//                                             Delete
//                                         </button>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     ))}
//                     {newUserRow && (
//                         <tr>
//                             <td className="border p-2">
//                                 <input
//                                     type="text"
//                                     placeholder="Name"
//                                     value={newUser.name}
//                                     onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                                     className="p-2 border w-full"
//                                 />
//                             </td>
//                             <td className="border p-2">
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     value={newUser.email}
//                                     onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//                                     className="p-2 border w-full"
//                                 />
//                             </td>
//                             <td className="border p-2">
//                                 <input
//                                     type="password"
//                                     placeholder="Password"
//                                     value={newUser.password}
//                                     onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//                                     className="p-2 border w-full"
//                                 />
//                             </td>
//                             <td className="border p-2">
//                                 <select
//                                     value={newUser.role}
//                                     onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//                                     className="p-2 border w-full"
//                                 >
//                                     <option value="user">User</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                             </td>
//                             <td className="border p-2">
//                                 <button
//                                     onClick={handleCreateUser}
//                                     className="bg-green-600 text-white px-2 py-1 mx-1"
//                                 >
//                                     Add User
//                                 </button>
//                                 <button
//                                     onClick={() => setNewUserRow(false)}
//                                     className="bg-gray-600 text-white px-2 py-1 mx-1"
//                                 >
//                                     Cancel
//                                 </button>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//             {!newUserRow && (
//                 <button
//                     onClick={() => setNewUserRow(true)}
//                     className="bg-blue-600 text-white px-4 py-2 mt-4"
//                 >
//                     + Add User
//                 </button>
//             )}
//         </div>
//     );
// };

// export default AdminDashboard;


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
            const { data } = await axios.get('http://localhost:5000/api/users', {
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
                'http://localhost:5000/api/users/create',
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
            const { data } = await axios.delete(`http://localhost:5000/api/users/${id}`, {
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
                `http://localhost:5000/api/users/${id}`,
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
                                            className="bg-blue-600 text-white px-2 py-1 mx-1"
                                        >
                                            Update Role
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="bg-red-600 text-white px-2 py-1 mx-1"
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
                                    className="bg-green-600 text-white px-2 py-1 mx-1"
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
                    className="bg-blue-600 text-white px-4 py-2 mt-4"
                >
                    + Add User
                </button>
            )}
        </div>
    );
};

export default AdminDashboard;
