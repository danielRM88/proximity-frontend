export const CREATE_CHAIR_REQUEST = 'CREATE_CHAIR_REQUEST'
export const CREATE_CHAIR_SUCCESS = 'CREATE_CHAIR_SUCCESS'
export const CREATE_CHAIR_FAILURE = 'CREATE_CHAIR_FAILURE'

export function createChairRequest(chair) {
  return {
    type: CREATE_CHAIR_REQUEST,
    payload: {
      chair,
      loading: true
    }
  }
}

export function createChairSuccess() {
  return {
    type: CREATE_CHAIR_SUCCESS,
    payload: {
      loading: false
    }
  }
}

export function createChairFailure(message) {
  return {
    type: CREATE_CHAIR_FAILURE,
    payload: {
      loading: false,
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