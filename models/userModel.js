mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userId: {
		type: Number,
		unique: true
	},
	name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;