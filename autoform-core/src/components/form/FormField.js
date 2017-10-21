import React from 'react';
import PropTypes from 'prop-types';

export default class FormField extends React.Component {
    static displayName = 'FormField';

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
        component: PropTypes.string,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    };

    render() {
        return false;
    }
}
