import queryString from 'queryString';

const queryStr = obj => (
  queryString.stringify(obj)
);

export {
  queryStr,
};

