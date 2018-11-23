import React, { Component, Fragment } from 'react';

class DialogFlow extends Component {
    render() {
        return (
            <Fragment>
            <iframe
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/3d0386a1-187a-47b9-8690-8023ff01e194">
              </iframe>
            </Fragment>
        );
    }
}

export default DialogFlow;
