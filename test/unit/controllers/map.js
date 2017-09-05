import chai from 'chai';

import { MapController } from '../../../api/controllers';

const assert = chai.assert;
const expect = chai.expect;

describe('MapController', () => {
  it('should exist', () => {
    assert.typeOf(MapController, 'function');
  });

  it('should have the following methods', () => {
    assert.isFunction(MapController.attachMapsData, 'attachMapsData');
    assert.isFunction(MapController.getSnapped, 'getSnapped');
  });
});
