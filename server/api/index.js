import {Router} from 'express';

import users from './users';
import todos from './todos';

const router = Router();

// Add USERS Routes
router.use(users);
router.use(todos);

export default router;
