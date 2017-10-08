import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
    static displayName = "ErrorBoundary";

    static propTypes = {
        render: PropTypes.func.isRequired,
        onFormError: PropTypes.func.isRequired
    };

    static defaultProps = {
        render: (error, info) => <h1>Ups, something went wrong</h1>
    };

    state = {
        hasError: false,
        error: null,
        info: null
    };

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error, info });

        if (this.props.onFormError) {
            this.props.onFormError(error, info);
        }
    }

    render() {
        if (this.state.hasError) {
            return this.props.render(this.state.error, this.state.info);
        }

        return this.props.children;
    }
}