import { Router } from 'express';

import { MapController } from './controllers';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await MapController.getSnapped(['-35.27801,149.12958', '-35.28302,149.12881']);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

export default router;

