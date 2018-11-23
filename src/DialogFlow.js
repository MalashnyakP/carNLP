import React, { Component, Fragment } from 'react';

class DialogFlow extends Component {
    render() {
        return (
            <Fragment>
                <iframe
                    allow="microphone;"
                    width="350"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/95d342cb-1985-46e8-92e9-deeedb4d9b00">
                </iframe>
            </Fragment>
        );
    }
}

export default DialogFlow;



