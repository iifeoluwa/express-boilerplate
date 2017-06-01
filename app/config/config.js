'use strict';

const appName = 'boilerplate';
const config = {
    appName: appName,
    environment: process.env.environment || 'dev',
    port: process.env.PORT || '8080'
   };

module.exports = config;
