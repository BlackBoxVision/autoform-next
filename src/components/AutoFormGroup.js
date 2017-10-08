import React from 'react';

export default class AutoFormGroup extends React.Component {
    static displayName = "AutoFormGroup";

    render() {
        return React.Children.map(this.props.children, ({ props }) => JSON.stringify(props));
    }
}