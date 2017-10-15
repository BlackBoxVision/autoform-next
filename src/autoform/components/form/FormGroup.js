import React from 'react';

export default class FormGroup extends React.Component {
    static displayName = 'FormGroup';

    render() {
        return this.props.children;
    }
}
