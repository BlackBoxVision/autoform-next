import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
    static displayName = 'ErrorBoundary';

    static propTypes = {
        render: PropTypes.func.isRequired,
        onError: PropTypes.func.isRequired
    };

    static defaultProps = {
        render: (error, info) => <h1>Ups, something went wrong</h1>
    };

    state = {
        hasError: false,
        error: null,
        info: null
    };

    //Setup error handler based on React version
    [React.version.includes('16')
        ? 'componentDidCatch'
        : 'unstable_handleError'] = (error, info) => {
        this.setState({ hasError: true, error, info });

        if (this.props.onError) {
            this.props.onError(error, info);
        }
    };

    render() {
        if (this.state.hasError) {
            return this.props.render(this.state.error, this.state.info);
        }

        return this.props.children;
    }
}
