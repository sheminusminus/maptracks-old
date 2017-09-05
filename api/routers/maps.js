import { Router } from 'express';

import { MapController } from '../controllers';

const router = Router();

router.get(
  '/',
  MapController.attachMapsData,
  MapController.getSnapped,
);

export default router;

