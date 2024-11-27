// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/userRoutes');

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

// Updated CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Your frontend's URL
    credentials: true, // Allow credentials
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
