// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');
// const router = express.Router();

// // Utility function to create JWT token
// const createToken = (user) => {
//     return jwt.sign(
//         { id: user._id, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: '1d' }
//     );
// };

// // Register
// router.post('/register', async (req, res) => {
//     const { name, email, password, role } = req.body;
//     try {
//         // Check if the email is already registered
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create a new user
//         const user = new User({ name, email, password, role });
//         await user.save();

//         // Return a success message
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Login
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Verify password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Generate JWT token
//         const token = createToken(user);

//         // Return the token and user info
//         res.json({
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Get all users (Admin only)
// router.get('/', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const users = await User.find().select('-password'); // Exclude passwords from the response
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Delete a user (Admin only)
// router.delete('/:id', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const user = await User.findByIdAndDelete(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Update a user's role (Admin only)
// router.put('/:id', authMiddleware, async (req, res) => {
//     const { role } = req.body;
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Update the user's role
//         user.role = role;
//         await user.save();

//         res.json({ message: 'User role updated successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');
// const router = express.Router();

// // Utility function to create JWT token
// const createToken = (user) => {
//     return jwt.sign(
//         { id: user._id, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: '1d' }
//     );
// };

// // Register
// router.post('/register', async (req, res) => {
//     const { name, email, password, role } = req.body;
//     try {
//         // Check if the email is already registered
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create a new user
//         const user = new User({ name, email, password, role });
//         await user.save();

//         // Return a success message
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Login
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Verify password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Generate JWT token
//         const token = createToken(user);

//         // Return the token and user info
//         res.json({
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Get all users (Admin only)
// router.get('/', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const users = await User.find().select('-password'); // Exclude passwords from the response
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Delete a user (Admin only)
// router.delete('/:id', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const user = await User.findById(req.params.id);

//         // Prevent root admin from being deleted
//         if (user.email === 'admin@gmail.com') {
//             return res.status(403).json({ message: 'Cannot delete the root admin' });
//         }

//         // Prevent admin from deleting themselves
//         if (req.user.id === req.params.id) {
//             return res.status(403).json({ message: 'You cannot delete yourself' });
//         }

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         await user.remove();
//         res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Create a new user with role assignment (Admin only)
// router.post('/create', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const { name, email, password, role } = req.body;

//         // Validate inputs
//         if (!name || !email || !password || !role) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         // Prevent root admin duplication
//         if (email === 'admin@gmail.com') {
//             return res.status(403).json({ message: 'Cannot create root admin' });
//         }

//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create the user
//         const user = new User({ name, email, password, role });
//         await user.save();

//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// // Update a user's role (Admin only)
// router.put('/:id', authMiddleware, async (req, res) => {
//     const { role } = req.body;
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Update the user's role
//         user.role = role;
//         await user.save();

//         res.json({ message: 'User role updated successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');
// const router = express.Router();

// // Utility function to create JWT token
// const createToken = (user) => {
//     return jwt.sign(
//         { id: user._id, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: '1d' }
//     );
// };

// // Register
// router.post('/register', async (req, res) => {
//     const { name, email, password, role } = req.body;
//     try {
//         // Check if the email is already registered
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Create a new user
//         const user = new User({ name, email, password, role });
//         await user.save();

//         // Return a success message
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

// // Login
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         // Check if the user exists
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Verify password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Generate JWT token
//         const token = createToken(user);

//         // Return the token and user info
//         res.json({
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Get all users (Admin only)
// router.get('/', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const users = await User.find().select('-password'); // Exclude passwords from the response
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Delete a user (Admin only)
// router.delete('/:id', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const user = await User.findById(req.params.id);

//         // Prevent root admin from being deleted
//         if (user.email === 'admin@gmail.com') {
//             return res.status(403).json({ message: 'Cannot delete the root admin' });
//         }

//         // Prevent admin from deleting themselves
//         if (req.user.id === req.params.id) {
//             return res.status(403).json({ message: 'You cannot delete yourself' });
//         }

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         await user.remove();
//         res.json({ message: 'User deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Create a new user with role assignment (Admin only)
// router.post('/create', authMiddleware, async (req, res) => {
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const { name, email, password, role } = req.body;

//         // Validate inputs
//         if (!name || !email || !password || !role) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         // Validate role
//         const validRoles = ['user', 'admin'];
//         if (!validRoles.includes(role)) {
//             return res.status(400).json({ message: 'Invalid role value' });
//         }

//         // Prevent root admin duplication
//         if (email === 'admin@gmail.com') {
//             return res.status(403).json({ message: 'Cannot create root admin' });
//         }

//         // Check if the email is already registered
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists with this email' });
//         }

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create the user
//         const user = new User({ name, email, password: hashedPassword, role });
//         await user.save();

//         res.status(201).json({
//             message: 'User created successfully',
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role,
//             },
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });


// // Update a user's role (Admin only)
// router.put('/:id', authMiddleware, async (req, res) => {
//     const { role } = req.body;
//     try {
//         if (req.user.role !== 'admin') {
//             return res.status(403).json({ message: 'Access denied' });
//         }

//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Update the user's role
//         user.role = role;
//         await user.save();

//         res.json({ message: 'User role updated successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;



const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const mongoose = require('mongoose');

// Utility function to create JWT token
const createToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};



router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        console.log('Saved user:', user);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error in /register:', error);
        res.status(400).json({ error: error.message });
    }
});




router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        console.log({
            userInDatabase: user,
            enteredPassword: password,
        });

        const isMatch = await bcrypt.compare(password, user.password);
        console.log({ isPasswordMatching: isMatch });

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('Error in /login:', error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/logout', authMiddleware, (req, res) => {
    try {
        // JWT is stateless, so we simply send a response to clear it client-side.
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Error in /logout:', error.message);
        res.status(500).json({ error: error.message });
    }
});

// Get all users (Admin only)
router.get('/', authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const users = await User.find().select('-password'); // Exclude passwords from the response
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    const userIdToDelete = req.params.id;
    console.log('Request Params:', req.params); // Debug log
    console.log('Authenticated User:', req.user); // Debug log

    try {
        // Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(userIdToDelete)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }

        const user = await User.findById(userIdToDelete);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Prevent root admin from being deleted
        if (user.email === 'admin@gmail.com') {
            return res.status(403).json({ message: 'Cannot delete the root admin' });
        }

        // Check if the requesting user is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Only admins can delete users' });
        }

        // Prevent admin from deleting themselves
        if (req.user.id === userIdToDelete) {
            return res.status(403).json({ message: 'You cannot delete yourself' });
        }

        // Delete the user from the database
        await User.findByIdAndDelete(userIdToDelete);

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error in deleting user:', error.message);
        res.status(500).json({ error: error.message });
    }
});




// Create a new user with role assignment (Admin only)
router.post('/create', authMiddleware, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const { name, email, password, role } = req.body;

        // Validate inputs
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Validate role
        const validRoles = ['user', 'admin'];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ message: 'Invalid role value' });
        }

        // Prevent root admin duplication
        if (email === 'admin@gmail.com') {
            return res.status(403).json({ message: 'Cannot create root admin' });
        }

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user's role (Admin only)
router.put('/:id', authMiddleware, async (req, res) => {
    const { role } = req.body;
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user's role
        user.role = role;
        await user.save();

        res.json({ message: 'User role updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
