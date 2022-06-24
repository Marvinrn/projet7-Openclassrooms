const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const auth = require('../middlewares/auth');

//Routage
router.post('/', auth, postCtrl.createPost)
router.put('/:id', auth, postCtrl.updatePost)
router.delete('/:id', auth, postCtrl.deletePost)
router.get('/', auth, postCtrl.getPost)
router.post('/:id/like', auth, postCtrl.likePost)

module.exports = router; 