import React, { Component, Fragment } from 'react';

class DialogFlow extends Component {
    render() {
        return (
            <Fragment>
                <iframe
                    allow="microphone;"
                    width="350"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/be5bec94-6d9d-4d86-912a-a15e7e87adae">
                </iframe>
            </Fragment>
        );
    }
}

export default DialogFlow;



