import { Router } from 'express';

import { FirebaseController } from '../controllers';

const router = Router();

router.get(
  '/',
  FirebaseController.getConfig,
);

export default router;

