const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
	create,
	login,
	checkToken,
	show,
	createComment,
	updateComment,
	deleteComment
};

async function show(req,res){
    const user = await User.findById(req.params.id)
        res.json(user)
}

async function createComment(req,res){
    User.findById(req.params.id, function(err, user) {
		user.comments.push(req.body)
        user.save(function(err) {
            res.json(user)
        })
    })
}

async function updateComment(req, res){
	const user = await User.findById(req.params.id)
    const oldComment = user.comments.find((comment) => {
        return req.params.id2 == comment._id
    })
    const index = user.comments.indexOf(oldComment)
    const updatedComment = user.comments.create(req.body)
    user.comments.splice(index, 1, updatedComment)
    user.save(function(err) {
        res.status(200).json(user)
    })
}

async function deleteComment(req, res){
    const user = await User.findById(req.params.id)
    const comment = await user.comments.remove(req.params.id2)
    user.save(function(err) {
        res.status(200)
    })
}

async function create(req, res) {
	try {
		// Add the user to the database
		const user = await User.create(req.body);
		// token will be a string
		const token = createJWT(user);
		// Yes, we can use res.json to send back just a string
		// The client code takes this into consideration
		res.json(token);
	} catch (err) {
		// Client will check for non-2xx status code
		// 400 = Bad Request
		res.status(400).json(err);
	}
}

async function login(req, res) {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) throw new Error();
		const match = await bcrypt.compare(req.body.password, user.password);
		if (match) {
			const token = createJWT(user);
			res.json(token);
		} else {
			res.status(400).json('Bad Credentials');
		}
	} catch {
		res.status(400).json('Bad Credentials');
	}
}

function checkToken(req, res) {
	// req.user will always be there for you when a token is sent
	res.json(req.exp);
}

/* -- Helper Functions -- */
function createJWT(user) {
	return jwt.sign(
		// data payload
		{ user },
		process.env.SECRET,
		{ expiresIn: '24h' }
	);
}
