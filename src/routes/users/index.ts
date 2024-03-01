import { Router } from 'express';
import { createUser, getUserPosts } from '../../routes/users/handlers';

export const router = Router();

router.get('/:id/posts', getUserPosts);
router.post('/', createUser);