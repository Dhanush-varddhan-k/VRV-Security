// import React from 'react';


// const Home = () => {
//     return (
//         <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
//             <h1 className="text-3xl font-bold">Welcome to VRV Security</h1>
//             <p className="text-gray-600 mt-4">Role-Based Access Control Dashboard</p>
//         </div>
//     );
// };

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
            style={{ backgroundImage: `url('/earth5.jpg')`,opacity: 0.99,zIndex: -1 }}
        >
            <h1 className="text-4xl font-bold text-white">Welcome to VRV Security</h1>
            {/* <p className="text-red-400 mt-4">Role-Based Access Control Dashboard</p> */}
        </div>
    );
};


export default Home;
