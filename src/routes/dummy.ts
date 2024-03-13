import { Router } from 'express';
import { sayHi } from '../controller/dummy';

const router = Router();

router.get('/', sayHi);

export default router;
