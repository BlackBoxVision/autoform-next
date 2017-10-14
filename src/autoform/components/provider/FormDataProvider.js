import React from 'react';
import PropTypes from 'prop-types';

export default class FormDataProvider extends React.Component {
    static propTypes = {
        isDebugEnabled: PropTypes.bool.isRequired,
        formProps: PropTypes.object.isRequired,
        uiFactory: PropTypes.object.isRequired,
        children: PropTypes.any
    };

    static childContextTypes = {
        isDebugEnabled: PropTypes.bool.isRequired,
        formProps: PropTypes.object.isRequired,
        uiFactory: PropTypes.object.isRequired
    };

    getChildContext() {
        return {
            isDebugEnabled: this.props.isDebugEnabled,
            formProps: this.props.formProps,
            uiFactory: this.props.uiFactory
        };
    }

    render() {
        return this.props.children;
    }
}
