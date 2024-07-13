const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Fetch user's friends
router.get('/:username/friends', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).populate('friends');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user.friends);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching friends' });
    }
});
router.post('/', async (req, res) => {
    const { username, profilePicture, ootd, friends, posts } = req.body;

    try {
        const newUser = new User({
            username,
            profilePicture,
            ootd,
            friends,
            posts,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch individual user data
router.get('/:username', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user data' });
    }
});

// Search for a user
router.get('/search', async (req, res) => {
    const { query } = req.query;
    try {
        const users = await User.find({ username: new RegExp(query, 'i') }).limit(10);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error searching users' });
    }
});
// Add a friend
// router.put('/:username/friends', async (req, res) => {
//     const { friendId } = req.body; // Friend's ID should be passed in the request body
//     try {
//       const user = await User.findOneAndUpdate(
//         { username: req.params.username },
//         { $addToSet: { friends: friendId } }, // Adds friendId to friends array if it doesn't exist
//         { new: true }
//       );
//       res.json(user);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

// Add friend route
router.put('/:username/friends/:friendUsername', async (req, res) => {
    const { username, friendUsername } = req.params;

    try {
        // Find the user and the friend
        const user = await User.findOne({ username });
        const friend = await User.findOne({ username: friendUsername });

        if (!user || !friend) {
            return res.status(404).json({ message: "User or friend not found" });
        }

        // Add friend to user's friends array
        user.friends.push(friend._id);
        await user.save();

        res.status(200).json({ message: "Friend added successfully", friends: user.friends });
    } catch (error) {
        res.status(500).json({ message: "Error adding friend", error });
    }
});

module.exports = router;
