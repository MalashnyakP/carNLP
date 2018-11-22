'use strict';

import React from 'react';
import DialogFlow from './DialogFlow';

export class DialogFlowSector extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <DialogFlow />
            </div>
        );
    }
}

export default DialogFlowSector;
