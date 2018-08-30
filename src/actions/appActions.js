export const SET_REDIRECT_TRUE = 'SET_REDIRECT_TRUE'
export const SET_REDIRECT_FALSE = 'SET_REDIRECT_FALSE'

export function setRedirectTrue() {
  return {
    type: SET_REDIRECT_TRUE
  }
}

export function setRedirectFalse() {
  return {
    type: SET_REDIRECT_FALSE
  }
}