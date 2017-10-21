import React from 'react';
import PropTypes from 'prop-types';

export default class FormSubmit extends React.Component {
    static displayName = 'FormSubmit';

    static propTypes = {
        component: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
    };

    static defaultProps = {
        component: 'Button',
        type: 'submit'
    };

    render() {
        return false;
    }
}
