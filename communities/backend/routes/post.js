const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// Create a new post
router.post('/create', async (req, res) => {
    try {
        const newPost = new Post(req.body);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// user's posts with recommended clothes
router.get('/user/:userId', async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.userId }).populate('userId');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;
