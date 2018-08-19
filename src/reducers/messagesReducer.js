import { SET_MESSAGE, REMOVE_MESSAGE } from '../actions/messagesActions';
const initialState = {
  messages: [],
  messageType: undefined
};

const messages = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_MESSAGE:
      return { ...state, ...action.payload }
    case REMOVE_MESSAGE:
      return { ...state, ...action.payload }
  }
  return state;
}

export default messages;