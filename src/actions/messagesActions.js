export const SET_MESSAGE = 'SET_MESSAGE'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

export function setMessage(messages, type) {
  return {
    type: SET_MESSAGE,
    payload: {
      messages: messages,
      messageType: type
    }
  }
}

export function removeMessage(response) {
  return {
    type: REMOVE_MESSAGE,
    payload: {
      messages: [],
      messageType: undefined
    }
  }
}