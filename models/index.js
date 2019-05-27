const mongoose = require('mongoose');

const User = require('./users.js');

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/example";

const connectDB = () => {
	return mongoose.connect(uri);
};

module.exports = {
	connectDB,
	models: {
		User
	}
}