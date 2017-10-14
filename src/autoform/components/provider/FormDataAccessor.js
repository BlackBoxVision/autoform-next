import React from 'react';
import PropTypes from 'prop-types';

export default class FormDataAccesor extends React.Component {
    static contextTypes = {
        isDebugEnabled: PropTypes.bool.isRequired,
        formProps: PropTypes.object.isRequired,
        uiFactory: PropTypes.object.isRequired
    };

    static propTypes = {
        render: PropTypes.func.isRequired
    };

    render() {
        return this.props.render(this.context);
    }
}