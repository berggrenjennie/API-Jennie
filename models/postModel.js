mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	postId: {
		type: Number,
		unique: true
	},
	title: String,
	description: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;