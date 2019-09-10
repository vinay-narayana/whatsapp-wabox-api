const Constants = require('../config/constants');
const http = require('./httpRequest');
const appConfig = require('../config/main');

const getHeaders = () => {
    const headers =  {
        'Content-Type' : 'application/json'
    };
    return headers;
}

const getToken = () => {
    return appConfig.accessToken;
}

const callApi = (req, cb) => {
    http.performReq(req, cb);
    // switch(method) {
    //     case Constants.GET: 
    //             http.performRequestGet(url, headers, cb);
    //         break;
    //     case Constants.POST:
    //             http.performRequest(url, data, headers, cb);
    //         break;
    //     case Constants.PUT:
    //             http.performRequestPut(url, data, headers, cb);
    //         break;
    //     default:
    //         console.log('Method not found', method);
    // }
}

module.exports = {
    callApi,
    getHeaders,
    getToken
}