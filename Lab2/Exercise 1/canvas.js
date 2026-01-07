// Get the canvas and 2D drawing context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// 1) Filled rectangle
ctx.fillStyle = "#4CAF50";             // green
ctx.fillRect(30, 40, 150, 80);         // x, y, width, height

// 2) Filled circle
ctx.beginPath();
ctx.arc(350, 90, 40, 0, Math.PI * 2);  // x, y, radius, startAngle, endAngle
ctx.fillStyle = "#2196F3";             // blue
ctx.fill();

// 3) Straight line
ctx.beginPath();
ctx.moveTo(50, 200);                   // start point
ctx.lineTo(450, 200);                  // end point
ctx.strokeStyle = "#000000";           // black
ctx.lineWidth = 3;
ctx.stroke();

// 4) Text "HTML5 Canvas"
ctx.font = "24px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("HTML5 Canvas", 170, 280);  // text, x, y
