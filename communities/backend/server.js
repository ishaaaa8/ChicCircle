const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myntra-hackathon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Routes
// const userRoutes = require('./routes/user');
const userRoutes = require('./routes/userRoutes'); // 
const postRoutes = require('./routes/post');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
