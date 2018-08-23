import request from 'superagent';

export function getKMeansDataService(chairId, limit, success, error) {
  request
    .get('http://localhost:3000/chairs/'+chairId+'/kmeans_data')
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