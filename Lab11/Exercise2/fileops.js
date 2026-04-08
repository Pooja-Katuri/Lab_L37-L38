// Import file system module using require()
const fs = require('fs');

const fileName = 'example.txt';

// 1️⃣ Create a new file (writeFile)
fs.writeFile(fileName, 'Hello! This is the initial content.\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created successfully.');

    // 2️⃣ Read the file (readFile)
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:\n', data);

        // 3️⃣ Append data (appendFile)
        fs.appendFile(fileName, 'This is appended content.\n', (err) => {
            if (err) {
                console.error('Error appending file:', err);
                return;
            }
            console.log('Data appended successfully.');

            // 4️⃣ Read again after append
            fs.readFile(fileName, 'utf8', (err, updatedData) => {
                if (err) {
                    console.error('Error reading updated file:', err);
                    return;
                }
                console.log('Updated file content:\n', updatedData);

                // 5️⃣ Delete file (unlink)
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});