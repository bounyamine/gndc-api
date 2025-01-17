import { Request, Response } from 'express';
import Post from '../models/blog.model';

const getPosts = async (_req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    throw error;
  }
};

const getPostById = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    throw error;
  }
};

const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json({ message: 'Post created', post: newPost });
  } catch (error) {
    throw error; 
  }
};

const updatePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json({ message: 'Post updated', post });
  } catch (error) {
    throw error; 
  }
};

const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    throw error; 
  }
};

export { getPosts, getPostById, createPost, updatePost, deletePost };
