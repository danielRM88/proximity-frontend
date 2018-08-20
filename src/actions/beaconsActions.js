export const REFRESH_BEACON_DATA_REQUEST = 'REFRESH_BEACON_DATA_REQUEST'

export function refreshBeaconDataRequest(beacons, limit) {
  return {
    type: REFRESH_BEACON_DATA_REQUEST,
    payload: {
      beacons,
      limit
    }
  }
}


export const GET_BEACON_DATA_FROM_CHAIR_REQUEST = 'GET_BEACON_DATA_FROM_CHAIR_REQUEST'
export const GET_BEACON_DATA_REQUEST = 'GET_BEACON_DATA_REQUEST'
export const GET_BEACON_DATA_SUCCESS = 'GET_BEACON_DATA_SUCCESS'
export const GET_BEACON_DATA_FAILURE = 'GET_BEACON_DATA_FAILURE'

export function getBeaconDataFromChairRequest(chairId, limit) {
  return {
    type: GET_BEACON_DATA_FROM_CHAIR_REQUEST,
    payload: {
      chairId,
      limit,
      loading: true
    }
  }
}

export function getBeaconDataRequest(beacons, limit) {
  return {
    type: GET_BEACON_DATA_REQUEST,
    payload: {
      beacons,
      limit,
      loading: true
    }
  }
}

export function getBeaconDataSuccess(beacons) {
  return {
    type: GET_BEACON_DATA_SUCCESS,
    payload: {
      beacons,
      loading: false
    }
  }
}

export function getBeaconDataFailure(message) {
  return {
    type: GET_BEACON_DATA_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const CREATE_BEACON_REQUEST = 'CREATE_BEACON_REQUEST'
export const CREATE_BEACON_SUCCESS = 'CREATE_BEACON_SUCCESS'
export const CREATE_BEACON_FAILURE = 'CREATE_BEACON_FAILURE'

export function createBeaconRequest(beacon) {
  return {
    type: CREATE_BEACON_REQUEST,
    payload: {
      beacon,
      loading: true
    }
  }
}

export function createBeaconSuccess() {
  return {
    type: CREATE_BEACON_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function createBeaconFailure(message) {
  return {
    type: CREATE_BEACON_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const GET_BEACONS_REQUEST = 'GET_BEACONS_REQUEST'
export const GET_BEACONS_SUCCESS = 'GET_BEACONS_SUCCESS'
export const GET_BEACONS_FAILURE = 'GET_BEACONS_FAILURE'

export function getBeaconsRequest() {
  return {
    type: GET_BEACONS_REQUEST,
    payload: {
      loading: true,
      error: undefined
    }
  }
}

export function getBeaconsSuccess(beacons) {
  return {
    type: GET_BEACONS_SUCCESS,
    payload: {
      beacons,
      loading: false,
      error: undefined
    }
  }
}

export function getBeaconsFailure(message) {
  return {
    type: GET_BEACONS_FAILURE,
    payload: {
      loading: false,
      error: message
    }
  }
}


export const GET_BEACON_REQUEST = 'GET_BEACON_REQUEST'
export const GET_BEACON_SUCCESS = 'GET_BEACON_SUCCESS'
export const GET_BEACON_FAILURE = 'GET_BEACON_FAILURE'

export function getBeaconRequest(id) {
  return {
    type: GET_BEACON_REQUEST,
    payload: {
      loading: true,
      beaconId: id
    }
  }
}

export function getBeaconSuccess(beacon) {
  return {
    type: GET_BEACON_SUCCESS,
    payload: {
      beacon,
      loading: false
    }
  }
}

export function getBeaconFailure(message) {
  return {
    type: GET_BEACON_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const UPDATE_BEACON_REQUEST = 'UPDATE_BEACON_REQUEST'
export const UPDATE_BEACON_SUCCESS = 'UPDATE_BEACON_SUCCESS'
export const UPDATE_BEACON_FAILURE = 'UPDATE_BEACON_FAILURE'

export function updateBeaconRequest(beacon) {
  return {
    type: UPDATE_BEACON_REQUEST,
    payload: {
      loading: true,
      beacon
    }
  }
}

export function updateBeaconSuccess() {
  return {
    type: UPDATE_BEACON_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function updateBeaconFailure(message) {
  return {
    type: UPDATE_BEACON_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}


export const DELETE_BEACON_REQUEST = 'DELETE_BEACON_REQUEST'
export const DELETE_BEACON_SUCCESS = 'DELETE_BEACON_SUCCESS'
export const DELETE_BEACON_FAILURE = 'DELETE_BEACON_FAILURE'

export function deleteBeaconRequest(beaconId) {
  return {
    type: DELETE_BEACON_REQUEST,
    payload: {
      loading: true,
      beaconId
    }
  }
}

export function deleteBeaconSuccess() {
  return {
    type: DELETE_BEACON_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function deleteBeaconFailure(message) {
  return {
    type: DELETE_BEACON_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}