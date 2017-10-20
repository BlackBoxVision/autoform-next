import React from 'react';
import PropTypes from 'prop-types';

export default class FormGroup extends React.Component {
    static displayName = 'FormGroup';

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        component: PropTypes.string,
        name: PropTypes.string.isRequired
    };

    render() {
        return this.props.children;
    }
}
