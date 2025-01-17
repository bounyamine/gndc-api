import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', (_req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

export default router;