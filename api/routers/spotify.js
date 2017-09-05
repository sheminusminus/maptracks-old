import { Router } from 'express';

import { SpotifyController } from '../controllers';

const router = Router();

router.get(
  '/auth/:uid',
  SpotifyController.attachSpotifyData,
  SpotifyController.login,
);

router.get(
  '/callback',
  SpotifyController.attachSpotifyData,
  SpotifyController.handleAuthCallback,
);

router.get(
  '/refresh',
  SpotifyController.attachSpotifyData,
  SpotifyController.refresh,
);

router.get(
  '/',
  SpotifyController.attachSpotifyData,
  SpotifyController.getCallbackData,
);

export default router;

