const axios = require('axios');

function performRequest(url, data, headers, cb) {
  console.info('Post Request url: ' + url);
  axios
    .post(url, data, headers )
    .then(response => {
      cb(null, response.data);
    })
    .catch(error => {
      if (error.response !== undefined) {
        console.error('Error:');
        console.error(headers);
        console.error(data);
        console.error(error.response.data);
        cb(error.response.data, null);
      } else {
        console.error('Error:');
        console.error(headers);
        console.error(data);
        console.error(error);
        cb(error, null);
      }
    });
}

function performRequestPut(url, data, headers, cb) {
  console.info('Put Request url: ' + url);
  axios
    .put(url, data, headers )
    .then(response => {
      cb(null, response.data);
    })
    .catch(error => {
      if (error.response !== undefined) {
        // console.error('Error:');
        // console.error(headers);
        // console.error(data);
        // console.error(error.response.data);
        cb(error.response.data, null);
      } else {
        // console.error('Error:');
        // console.error(headers);
        // console.error(data);
        // console.error(error);
        cb(error, null);
      }
    });
}

function performRequestGet(url, headers, cb) {
  console.info('Get Request url: ' + url);
  axios
    .get(url, headers )
    .then(response => {
      cb(null, response.data);
    })
    .catch(error => {
       if (error.response !== undefined) {
         //Handling searchTerm not as error as there are a lot of this
         if (error.response.data !== undefined && error.response.data.title === 'No Configuration Found') {
           console.info('No Configuration Found: ' + url);
         } else {
            console.error('Error:');
            console.error(error);
            console.error(headers);
         }
           cb(error.response.data, null);
      } else {
        console.error('Error:');
        console.error(headers);
        console.error(error);
        cb(error, null);
      }
    });
}

function performReq(req, cb) {
  console.log('req', req);
  axios(req)
    .then((response) => {
      console.log('response', response.data)
      cb(null, response.data);
    })
    .catch((error) => {
      if (error.response !== undefined) {
        console.error('Error:', req);
        cb(error.response.data, null);
      } else {
        console.error('Error:', req);
        console.error(error);
        cb(error, null);
      }
    })
}

module.exports = {
  performRequest,
  performRequestGet,
  performRequestPut,
  performReq
};
