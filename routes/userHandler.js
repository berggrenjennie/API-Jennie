
getUsers = (req, res, next) => {
	req.models.User.find().then((users) => {
		return res.send(users);
	}).catch((error) => {
		next(error)
	})
}

postUser = (req, res, next) => {
	req.models.User.create({
		name: req.body.name
	}).then((user) => {
		return res.status(201).send(user);
	}).catch((error) => {
		next(error)
	})
}

module.exports = {
	getUsers,
	postUser
}