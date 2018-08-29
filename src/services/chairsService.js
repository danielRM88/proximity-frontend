import request from 'superagent';
var config = require('config');

const server = config.serverUrl;

export function updateGroundTruthService(groundTruth, success, error) {
  request
    .put(server+'/chairs/'+groundTruth.chairId+'/ground_truth')
    .set('Content-Type', 'application/json')
    .send({ ground_truth: groundTruth })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

export function updateFilterProcessErrorService(data, success, error) {
  request
    .put(server+'/chairs/'+data.chairId+'/update_filter_process_noise')
    .set('Content-Type', 'application/json')
    .send({ process_error: data.processNoise, continuous_adjustment: data.continuousAdjustment, adjustment_threshold: data.adjustmentThreshold })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

export function getCalibrationProgressService(chairId, success, error) {
  request
    .get(server+'/chairs/'+chairId+'/fetch_calibration_progress')
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

export function startChairCalibrationService(calibration, success, error) {
  request
    .post(server+'/chairs/'+calibration.chair_id+'/start_calibration')
    .set('Content-Type', 'application/json')
    .send({ calibration: calibration })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    })
};

export function getChairDataService(chairId, limit, success, error) {
  request
    .get(server+'/chairs/'+chairId+'/predictions')
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
    .post(server+'/chairs')
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
    .get(server+'/chairs')
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
    .delete(server+'/chairs/'+chairId)
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
    .get(server+'/chairs/'+chairId)
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
    .put(server+'/chairs/'+chair.id)
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