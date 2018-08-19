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