export const UPDATE_GROUND_TRUTH_REQUEST = 'UPDATE_GROUND_TRUTH_REQUEST'
export const UPDATE_GROUND_TRUTH_SUCCESS = 'UPDATE_GROUND_TRUTH_SUCCESS'
export const UPDATE_GROUND_TRUTH_FAILURE = 'UPDATE_GROUND_TRUTH_FAILURE'

export function updateGroundTruthRequest(groundTruth) {
  return {
    type: UPDATE_GROUND_TRUTH_REQUEST,
    payload: {
      loading: true,
      groundTruth
    }
  }
}

export function updateGroundTruthSuccess() {
  return {
    type: UPDATE_GROUND_TRUTH_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function updateGroundTruthFailure(message) {
  return {
    type: UPDATE_GROUND_TRUTH_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const UPDATE_FILTER_PROCESS_ERROR_REQUEST = 'UPDATE_FILTER_PROCESS_ERROR_REQUEST'
export const UPDATE_FILTER_PROCESS_ERROR_SUCCESS = 'UPDATE_FILTER_PROCESS_ERROR_SUCCESS'
export const UPDATE_FILTER_PROCESS_ERROR_FAILURE = 'UPDATE_FILTER_PROCESS_ERROR_FAILURE'

export function updateFilterProcessErrorRequest(data, processError) {
  return {
    type: UPDATE_FILTER_PROCESS_ERROR_REQUEST,
    payload: {
      loading: true,
      data,
      processError
    }
  }
}

export function updateFilterProcessErrorSuccess() {
  return {
    type: UPDATE_FILTER_PROCESS_ERROR_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function updateFilterProcessErrorFailure(message) {
  return {
    type: UPDATE_FILTER_PROCESS_ERROR_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const GET_CALIBRATION_PROGRESS_REQUEST = 'GET_CALIBRATION_PROGRESS_REQUEST'
export const GET_CALIBRATION_PROGRESS_SUCCESS = 'GET_CALIBRATION_PROGRESS_SUCCESS'
export const GET_CALIBRATION_PROGRESS_FAILURE = 'GET_CALIBRATION_PROGRESS_FAILURE'

export function getCalibrationProgressRequest(chairId) {
  return {
    type: GET_CALIBRATION_PROGRESS_REQUEST,
    payload: {
      loading: true,
      chairId
    }
  }
}

export function getCalibrationProgressSuccess(response) {
  return {
    type: GET_CALIBRATION_PROGRESS_SUCCESS,
    payload: {
      loading: false,
      progress: response.progress,
      ongoing: response.ongoing,
      calibrated: response.calibrated
    }
  }
}

export function getCalibrationProgressFailure(message) {
  return {
    type: GET_CALIBRATION_PROGRESS_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const START_CHAIR_CALIBRATION_REQUEST = 'START_CHAIR_CALIBRATION_REQUEST'
export const START_CHAIR_CALIBRATION_SUCCESS = 'START_CHAIR_CALIBRATION_SUCCESS'
export const START_CHAIR_CALIBRATION_FAILURE = 'START_CHAIR_CALIBRATION_FAILURE'

export function startChairCalibrationRequest(calibration) {
  return {
    type: START_CHAIR_CALIBRATION_REQUEST,
    payload: {
      loading: true,
      calibration
    }
  }
}

export function startChairCalibrationSuccess(chair) {
  return {
    type: START_CHAIR_CALIBRATION_SUCCESS,
    payload: {
      loading: false,
      chair
    }
  }
}

export function startChairCalibrationFailure(message) {
  return {
    type: START_CHAIR_CALIBRATION_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const REFRESH_CHAIR_DATA_REQUEST = 'REFRESH_CHAIR_DATA_REQUEST'

export function refreshChairDataRequest(chairId, limit) {
  return {
    type: REFRESH_CHAIR_DATA_REQUEST,
    payload: {
      chairId,
      limit
    }
  }
}


export const GET_CHAIR_DATA_REQUEST = 'GET_CHAIR_DATA_REQUEST'
export const GET_CHAIR_DATA_SUCCESS = 'GET_CHAIR_DATA_SUCCESS'
export const GET_CHAIR_DATA_FAILURE = 'GET_CHAIR_DATA_FAILURE'

export function getChairDataRequest(chairId, limit) {
  return {
    type: GET_CHAIR_DATA_REQUEST,
    payload: {
      chairId,
      limit,
      loading: true
    }
  }
}

export function getChairDataSuccess(predictions) {
  return {
    type: GET_CHAIR_DATA_SUCCESS,
    payload: {
      predictions,
      loading: false
    }
  }
}

export function getChairDataFailure(message) {
  return {
    type: GET_CHAIR_DATA_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const CREATE_CHAIR_REQUEST = 'CREATE_CHAIR_REQUEST'
export const CREATE_CHAIR_SUCCESS = 'CREATE_CHAIR_SUCCESS'
export const CREATE_CHAIR_FAILURE = 'CREATE_CHAIR_FAILURE'

export function createChairRequest(chair) {
  return {
    type: CREATE_CHAIR_REQUEST,
    payload: {
      chair,
      redirect: false,
      loading: true
    }
  }
}

export function createChairSuccess() {
  return {
    type: CREATE_CHAIR_SUCCESS,
    payload: {
      loading: false,
      redirect: true
    }
  }
}

export function createChairFailure(message) {
  return {
    type: CREATE_CHAIR_FAILURE,
    payload: {
      loading: false,
      redirect: false,
      message
    }
  }
}


export const GET_CHAIRS_REQUEST = 'GET_CHAIRS_REQUEST'
export const GET_CHAIRS_SUCCESS = 'GET_CHAIRS_SUCCESS'
export const GET_CHAIRS_FAILURE = 'GET_CHAIRS_FAILURE'

export function getChairsRequest() {
  return {
    type: GET_CHAIRS_REQUEST,
    payload: {
      loading: true,
      error: undefined
    }
  }
}

export function getChairsSuccess(chairs) {
  return {
    type: GET_CHAIRS_SUCCESS,
    payload: {
      chairs,
      loading: false,
      error: undefined
    }
  }
}

export function getChairsFailure(message) {
  return {
    type: GET_CHAIRS_FAILURE,
    payload: {
      loading: false,
      error: message
    }
  }
}


export const GET_CHAIR_REQUEST = 'GET_CHAIR_REQUEST'
export const GET_CHAIR_SUCCESS = 'GET_CHAIR_SUCCESS'
export const GET_CHAIR_FAILURE = 'GET_CHAIR_FAILURE'

export function getChairRequest(id) {
  return {
    type: GET_CHAIR_REQUEST,
    payload: {
      loading: true,
      chairId: id
    }
  }
}

export function getChairSuccess(chair) {
  return {
    type: GET_CHAIR_SUCCESS,
    payload: {
      chair,
      loading: false
    }
  }
}

export function getChairFailure(message) {
  return {
    type: GET_CHAIR_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}

export const UPDATE_CHAIR_REQUEST = 'UPDATE_CHAIR_REQUEST'
export const UPDATE_CHAIR_SUCCESS = 'UPDATE_CHAIR_SUCCESS'
export const UPDATE_CHAIR_FAILURE = 'UPDATE_CHAIR_FAILURE'

export function updateChairRequest(chair) {
  return {
    type: UPDATE_CHAIR_REQUEST,
    payload: {
      loading: true,
      chair
    }
  }
}

export function updateChairSuccess() {
  return {
    type: UPDATE_CHAIR_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function updateChairFailure(message) {
  return {
    type: UPDATE_CHAIR_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const DELETE_CHAIR_REQUEST = 'DELETE_CHAIR_REQUEST'
export const DELETE_CHAIR_SUCCESS = 'DELETE_CHAIR_SUCCESS'
export const DELETE_CHAIR_FAILURE = 'DELETE_CHAIR_FAILURE'

export function deleteChairRequest(chairId) {
  return {
    type: DELETE_CHAIR_REQUEST,
    payload: {
      loading: true,
      chairId
    }
  }
}

export function deleteChairSuccess() {
  return {
    type: DELETE_CHAIR_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function deleteChairFailure(message) {
  return {
    type: DELETE_CHAIR_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}