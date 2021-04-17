'use strict';

module.exports.hello = async event => {

  console.log('EVENT: Lambda scheduler with CloudWatch Events');
  console.log('EVENT DETAILS:', JSON.stringify(event));

  return { message: 'CloudWatch Scheduler Event Triggered', event };
};

