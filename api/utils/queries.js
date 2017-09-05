import queryString from 'querystring';

const queryStr = obj => (
  queryString.stringify(obj)
);

export {
  queryStr,
};

