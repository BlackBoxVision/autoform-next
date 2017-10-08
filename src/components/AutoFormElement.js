import React from 'react';
import PropTypes from 'prop-types';

export default class AutoFormElement extends React.Component {
    static displayName = "AutoFormElement";

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        element: PropTypes.string.isRequired
    };

    render() {
        return false;
    }
}