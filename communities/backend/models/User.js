const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  profilePicture: { type: String },
  ootd: { type: String }, // OOTD picture
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Reference to User model
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], // Reference to Post model
});

module.exports = mongoose.model('User', userSchema);
