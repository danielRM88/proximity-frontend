import React, { Component } from 'react';

class Messages extends Component {
  render() {
    const { messages } = this.props;
    if(messages !== undefined) {
      return (
        <div className="col-sm-12">
          {
            messages.map((message, index) => {
              return (
                <div key={index} className="alert alert-danger alert-dismissible" role="alert">
                  {/*<button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>*/}
                  <p>{message}</p>
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default Messages;