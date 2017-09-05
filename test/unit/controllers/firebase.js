import chai from 'chai';

import { FirebaseController } from '../../../api/controllers';

const assert = chai.assert;
const expect = chai.expect;

describe('FirebaseController', () => {
  it('should exist', () => {
    assert.typeOf(FirebaseController, 'function');
  });

  it('should have the following methods', () => {
    assert.isFunction(FirebaseController.getConfig, 'getConfig');
  });
});
