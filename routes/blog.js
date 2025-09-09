const express = require('express');
const router = express.Router();
const { createComment } = require('../controllers/CommentController');
const { createPost,getAllPosts } = require('../controllers/PostController');
const{likePost, unlikePost}=require('../controllers/likeControoler');

router.post('/comments/create', createComment);
router.post('/posts/create',createPost);
router.get('/posts',getAllPosts)
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost)
module.exports = router;
