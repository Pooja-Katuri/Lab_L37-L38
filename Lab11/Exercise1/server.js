// Import required module using require()
const http = require('http');

// Create server using createServer()
const server = http.createServer((req, res) => {

    // Log request in console
    console.log(`Request received for: ${req.url}`);

    // Set response header
    res.setHeader('Content-Type', 'text/html');

    // Handle client requests (routing)
    if (req.url === '/' && req.method === 'GET') {
        res.write('<h1>Welcome to Home Page</h1>');
    } 
    else if (req.url === '/about' && req.method === 'GET') {
        res.write('<h1>About Page</h1>');
    } 
    else if (req.url === '/contact' && req.method === 'GET') {
        res.write('<h1>Contact Page</h1>');
    } 
    else {
        // Handle unknown routes
        res.statusCode = 404;
        res.write('<h1>404 - Page Not Found</h1>');
    }

    // End response
    res.end();
});

// Define port number
const PORT = 3000;

// Run server using listen()
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});