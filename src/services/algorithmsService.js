import request from 'superagent';
var config = require('config');

const server = config.serverUrl;

export function getKMeansDataService(chairId, limit, success, error) {
  request
    .get(server+'/chairs/'+chairId+'/kmeans_data')
    .set('Content-Type', 'application/json')
    .query({ limit: limit })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};