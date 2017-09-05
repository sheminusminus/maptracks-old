import chai from 'chai';

import { SpotifyService } from '../../../api/services';

const assert = chai.assert;
const expect = chai.expect;

describe('FirebaseService', () => {
  it('should exist', () => {
    assert.typeOf(SpotifyService, 'function');
  });

  it('should have the following methods', () => {
    assert.isFunction(SpotifyService.handleAuthCallback, 'handleAuthCallback');
    assert.isFunction(SpotifyService.refresh, 'refresh');
  });
});
