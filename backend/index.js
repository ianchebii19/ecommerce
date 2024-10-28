const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const router = require('./routes')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', router)

// Port setup
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
