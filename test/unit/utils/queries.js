import chai from 'chai';

import { queryStr } from '../../../api/utils';

const assert = chai.assert;
const expect = chai.expect;

describe('queryStr', () => {
  it('should exist', () => {
    assert.typeOf(queryStr, 'function');
  });

  it('should query-stringify key-value pairs', () => {
    const queryObject = {
      first: 'someValue',
      second: 3,
    };

    const expected = 'first=someValue&second=3';
    const result = queryStr(queryObject);

    assert.equal(result, expected);
  });
});
