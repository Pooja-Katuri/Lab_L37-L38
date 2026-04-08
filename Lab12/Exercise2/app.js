const express = require('express');
const app = express();

// ================= GLOBAL MIDDLEWARE =================

// Middleware 1: Log request details (method, URL, timestamp)
app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[GLOBAL 1] ${req.method} ${req.url} - ${time}`);
    next(); // pass control
});

// Middleware 2: Request preprocessing
app.use((req, res, next) => {
    console.log("[GLOBAL 2] Preprocessing request...");
    req.customData = "Processed Data"; // attach data to request
    next();
});

// Middleware 3: Another layer
app.use((req, res, next) => {
    console.log("[GLOBAL 3] Another middleware layer");
    next();
});

// ================= ROUTE-LEVEL MIDDLEWARE =================

// Route-specific middleware
const authMiddleware = (req, res, next) => {
    console.log("[ROUTE] Checking authentication...");
    const isLoggedIn = true; // simulate login

    if (isLoggedIn) {
        next();
    } else {
        res.send("Access Denied");
    }
};

// ================= ROUTES =================

// Simple route
app.get('/', (req, res) => {
    console.log("[ROUTE] Home route handler");
    res.send("Home Page");
});

// Route with route-level middleware
app.get('/dashboard', authMiddleware, (req, res) => {
    console.log("[ROUTE] Dashboard handler");
    res.send(`Dashboard - ${req.customData}`);
});

// Multiple middleware chaining for one route
app.get('/multi',
    (req, res, next) => {
        console.log("[CHAIN] Middleware 1");
        next();
    },
    (req, res, next) => {
        console.log("[CHAIN] Middleware 2");
        next();
    },
    (req, res) => {
        console.log("[CHAIN] Final handler");
        res.send("Multiple middleware executed");
    }
);

// ================= SERVER =================

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});