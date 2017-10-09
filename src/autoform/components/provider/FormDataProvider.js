import React from 'react';
import PropTypes from 'prop-types';

export default class FormDataProvider extends React.Component {
    static propTypes = {
        formProps: PropTypes.object.isRequired,
        uiAdapter: PropTypes.object.isRequired,
        children: PropTypes.any
    };

    static childContextTypes = {
        formProps: PropTypes.object.isRequired,
        uiAdapter: PropTypes.object.isRequired
    };

    getChildContext() {
        return {
            formProps: this.props.formProps,
            uiAdapter: this.props.uiAdapter
        };
    }

    render() {
        return this.props.children;
    }
}
