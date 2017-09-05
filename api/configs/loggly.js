import winston from 'winston';
import 'winston-loggly-bulk';

const configureLoggly = () => {
  // add logging to loggly
  winston.add(winston.transports.Loggly, {
    token: process.env.LOGGLY_TOKEN,
    subdomain: process.env.LOGGLY_SUBDOMAIN,
    tags: [
      'nodejs',
    ],
    json: true,
  });
};

export default configureLoggly;
