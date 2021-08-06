const express = require('express');
const router = express.Router();
const patchNotesCtrl = require('../controllers/patchNotes');
// require the authorization middleware function
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', patchNotesCtrl.index)
router.post('/new', patchNotesCtrl.create)
router.put('/:id', patchNotesCtrl.update)
router.delete('/:id', patchNotesCtrl.delete)
router.post('/:id/comments', patchNotesCtrl.createComment)
router.delete('/:id/comments/:id2', patchNotesCtrl.delete2)
router.put('/:id/comments/:id2', patchNotesCtrl.update2)
router.get('/:id', patchNotesCtrl.show)


module.exports = router;