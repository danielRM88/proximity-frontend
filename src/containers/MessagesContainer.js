import Messages from '../components/Messages'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  type: state.messages.messageType
});

const MessagesContainer = connect(mapStateToProps, null)(Messages);
export default MessagesContainer