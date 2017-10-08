import React from 'react';
import PropTypes from 'prop-types';

export default class FormField extends React.Component {
    static displayName = "FormField";

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        component: PropTypes.string.isRequired
    };

    render() {
        return this.props.children;
    }
}