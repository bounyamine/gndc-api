import { Router } from 'express';
import { getPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/blog.controller';
import Post from '../models/blog.model';
import { AuthRequest } from '../middleware/auth.middleware';

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/:id/comments', async (req: AuthRequest, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    const comment = `${req.body.content} (by ${req.user._id})`;

    post.comments = post.comments || [];
    post.comments.push(comment);
    await post.save();
    
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    console.error('Adding comment error:', error);
    throw error; 
  }
});

export default router;