'use strict';

const appName = 'advanced-vending-dashboard';
const config = {
    appName: appName,
    environment: process.env.environment,
    port: process.env.PORT || '8080'
   };

module.exports = config;
