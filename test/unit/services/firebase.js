import chai from 'chai';

import { FirebaseService } from '../../../api/services';

const assert = chai.assert;
const expect = chai.expect;

describe('FirebaseService', () => {
  it('should exist', () => {
    assert.typeOf(FirebaseService, 'function');
  });

  it('should have the following methods', () => {
    assert.isFunction(FirebaseService.getConfig, 'getConfig');
  });
});
