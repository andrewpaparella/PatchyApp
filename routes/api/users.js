const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
router.get('/:id', usersCtrl.show)
router.post('/:id/comments', usersCtrl.createComment)
router.put('/:id/comments/:id2', usersCtrl.updateComment)
router.delete('/:id/comments/:id2', usersCtrl.deleteComment)


module.exports = router;
