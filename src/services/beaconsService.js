import request from 'superagent';
var config = require('config');

const server = config.serverUrl;

export function getBeaconDataFromChairService(chairId, limit, success, error) {
  request
    .get(server+'/beacons/fetch_data')
    .set('Content-Type', 'application/json')
    .query({ chair_id: chairId, limit: limit })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

export function getBeaconDataService(beacons, limit, success, error) {
  request
    .get(server+'/beacons/fetch_data')
    .set('Content-Type', 'application/json')
    .query({ beacons_ids: `[${beacons}]`, limit: limit })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

export function createBeaconService(beacon, success, error) {
  request
    .post(server+'/beacons')
    .set('Content-Type', 'application/json')
    .send({ beacon: beacon })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

export function getBeaconsService(data, success, error) {
  request
    .get(server+'/beacons')
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

export function getBeaconService(beaconId, success, error) {
  request
    .get(server+'/beacons/'+beaconId)
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

export function updateBeaconService(beacon, success, error) {
  request
    .put(server+'/beacons/'+beacon.id)
    .set('Content-Type', 'application/json')
    .send({ beacon: beacon })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

export function deleteBeaconService(beaconId, success, error) {
  request
    .delete(server+'/beacons/'+beaconId)
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