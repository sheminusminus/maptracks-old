import chai from 'chai';

import { SpotifyController } from '../../../api/controllers';

const assert = chai.assert;
const expect = chai.expect;

describe('SpotifyController', () => {
  it('should exist', () => {
    assert.typeOf(SpotifyController, 'function');
  });

  it('should have the following methods', () => {
    assert.isFunction(SpotifyController.attachSpotifyData, 'attachSpotifyData');
    assert.isFunction(SpotifyController.login, 'login');
    assert.isFunction(SpotifyController.handleAuthCallback, 'handleAuthCallback');
    assert.isFunction(SpotifyController.refresh, 'refresh');
  });
});
