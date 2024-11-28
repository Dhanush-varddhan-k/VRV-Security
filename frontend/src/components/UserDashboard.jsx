import React from 'react';

const UserDashboard = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url('/earth5.jpg')`,opacity: 0.99,zIndex: -1 }}>
            <div className="text-center mt-10">
            <h2 className="text-4xl font-bold text-white">User Dashboard</h2>
            <p className='text-white'>Welcome to the user area!</p>
        </div>

        </div>
        
    );
};

export default UserDashboard;
