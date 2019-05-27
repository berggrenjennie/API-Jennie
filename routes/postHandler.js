getPosts = (req, res, next) => {
	req.models.Post.find().then((posts) => {
		return res.send(posts);
	}).catch((error) => {
		next(error)
	})
}

addPost = (req, res, next) => {
	req.models.Post.create({
		postId: req.body.postId,
		title: req.body.title,
		description: req.body.description
	}).then((post) => {
		return res.status(201).send(post);
	}).catch((error) => {
		next(error)
	})
}

module.exports = {
	getPosts,
	addPost
}