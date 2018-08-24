export const REFRESH_KMEANS_DATA_REQUEST = 'REFRESH_KMEANS_DATA_REQUEST'

export function refreshKMeansDataRequest(chairId) {
  return {
    type: REFRESH_KMEANS_DATA_REQUEST,
    payload: {
      chairId
    }
  }
}


export const GET_KMEANS_DATA_REQUEST = 'GET_KMEANS_DATA_REQUEST'
export const GET_KMEANS_DATA_SUCCESS = 'GET_KMEANS_DATA_SUCCESS'
export const GET_KMEANS_DATA_FAILURE = 'GET_KMEANS_DATA_FAILURE'

export function getKMeansDataRequest(chairId) {
  return {
    type: GET_KMEANS_DATA_REQUEST,
    payload: {
      loading: true,
      chairId
    }
  }
}

export function getKMeansDataSuccess(chairId, data, seated, performance) {
  return {
    type: GET_KMEANS_DATA_SUCCESS,
    payload: {
      loading: false,
      data,
      seated,
      performance,
      chairId
    }
  }
}

export function getKMeansDataFailure(message) {
  return {
    type: GET_KMEANS_DATA_FAILURE,
    payload: {
      loading: false,
      message
    }
  }
}