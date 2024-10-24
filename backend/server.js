const express = require('express');
const {connectDB} = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const bookingRoutes = require('./routes/booking');
const reviewRoutes = require('./routes/review');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/booking', bookingRoutes);
app.use('/api/review', reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
