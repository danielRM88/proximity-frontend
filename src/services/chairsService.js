import request from 'superagent';

export function getChairsService(data, success, error) {
  request
    .get('http://localhost:3000/chairs')
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};