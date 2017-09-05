import { Router } from 'express';

import { SpotifyController } from '../controllers';

const router = Router();

router.get(
  '/auth',
  SpotifyController.attachSpotifyData,
  SpotifyController.login,
);

router.get(
  '/callback',
  SpotifyController.attachSpotifyData,
  SpotifyController.handleCallback,
);

router.get(
  '/refresh',
  SpotifyController.attachSpotifyData,
  SpotifyController.refresh,
);

export default router;

