// Import events module using require()
const EventEmitter = require('events');

// Create an EventEmitter object
const eventEmitter = new EventEmitter();

// 1️⃣ Register multiple listeners for a custom event

// Listener 1
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

// Listener 2
eventEmitter.on('greet', (name) => {
    console.log(`How are you, ${name}?`);
});

// Listener 3 (demonstrating async behavior)
eventEmitter.on('greet', (name) => {
    setTimeout(() => {
        console.log(`(Async) Have a great day, ${name}!`);
    }, 1000);
});

// 2️⃣ Another custom event
eventEmitter.on('sum', (a, b) => {
    console.log(`Sum of ${a} and ${b} is ${a + b}`);
});

// 3️⃣ Emit events with data (arguments)
console.log("Triggering 'greet' event...");
eventEmitter.emit('greet', 'Pooja');

console.log("Triggering 'sum' event...");
eventEmitter.emit('sum', 5, 10);

// 4️⃣ Demonstrating async execution
console.log("This line executes before async listener finishes.");