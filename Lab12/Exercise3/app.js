const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());

// ================= DATABASE CONNECTION =================
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// ================= ROUTES =================
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});