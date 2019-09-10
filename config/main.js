/** General Configurations Like PORT, HOST names and etc... */
var config = {
    env: process.env.NODE_ENV || 'development',
    host: process.env.HOST_URL,
    accessToken: process.env.ACCESS_TOKEN,
    uid: process.env.UID
  };
  
  module.exports = config;
