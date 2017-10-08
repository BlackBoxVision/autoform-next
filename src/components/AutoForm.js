import React from 'react';
import iterateChildren from '../utils';

export default class AutoForm extends React.Component {
    static displayName = "AutoForm";

    render() {
        return iterateChildren(this.props.children, props => JSON.stringify(props));
    }
}