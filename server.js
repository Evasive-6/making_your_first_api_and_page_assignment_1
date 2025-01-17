const express = require('express');
const app = express();

// Helper function to get day-specific message
function getDayMessage() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getDay()];
    
    switch (currentDay) {
        case 'Monday':
            return 'Happy Monday! Start your week with energy!';
        case 'Friday':
            return "It's Friday! The weekend is near!";
        default:
            return 'Have a wonderful day!';
    }
}

// Assistant greeting endpoint
app.get('/assistant/greet', (req, res) => {
    // Get name from query parameters, default to 'friend' if not provided
    const name = req.query.name || 'friend';
    
    // Create response object
    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: getDayMessage()
    };
    
    // Send JSON response
    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
