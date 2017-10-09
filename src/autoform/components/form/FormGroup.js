import React from 'react';

export default class FormGroup extends React.Component {
    static displayName = 'FormGroup';

    render() {
        return React.Children.map(this.props.children, ({ props }) => JSON.stringify(props));
    }
}
