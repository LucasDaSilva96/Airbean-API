const moment = require('moment-timezone');

// Set default timezone to Norway
const timezone = 'Europe/Oslo';

exports.addMinutesToDate = () => {
  // TODO: This needs improvement ↓, right now the code adds 2 hours in order to upload the right time
  return moment().tz(timezone).add(15, 'minutes').add(2, 'hours').toDate();
};
