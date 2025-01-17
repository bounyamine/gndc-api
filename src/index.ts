import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'dotenv/config';
import connectDatabase from './config/database';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import eventRoutes from './routes/event.routes';
import projectRoutes from './routes/project.routes';
import blogRoutes from './routes/blog.routes';
import { errorMiddleware } from './middleware/error.middleware';
import teamRoutes from './routes/team.routes';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  })
);

connectDatabase();

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/team', teamRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
