const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String },
    tags: { type: [String] },
    imageUrl: { type: String },
    recommendedClothes: [{ type: String }],  // Add this line
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', PostSchema);
