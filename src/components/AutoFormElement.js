import React from 'react';
import PropTypes from 'prop-types';

export default class AutoFormElement extends React.Component {
    static displayName = "AutoFormElement";

    static propTypes = {
        name: PropTypes.string.isRequired,
        element: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        style: PropTypes.object.isRequired
    };

    static defaultProps = {
        style: {}
    };

    render() {
        return false;
    }
}