import request from 'superagent';

export function getChairDataService(chairId, limit, success, error) {
  request
    .get('http://localhost:3000/chairs/'+chairId+'/predictions')
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

export function createChairService(chair, success, error) {
  request
    .post('http://localhost:3000/chairs')
    .set('Content-Type', 'application/json')
    .send({ chair: chair })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

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

export function deleteChairService(chairId, success, error) {
  request
    .delete('http://localhost:3000/chairs/'+chairId)
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        // const response = JSON.parse(res.text);
        success();
      }
    })
};

export function getChairService(chairId, success, error) {
  request
    .get('http://localhost:3000/chairs/'+chairId)
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

export function updateChairService(chair, success, error) {
  request
    .put('http://localhost:3000/chairs/'+chair.id)
    .set('Content-Type', 'application/json')
    .send({ chair: chair })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};