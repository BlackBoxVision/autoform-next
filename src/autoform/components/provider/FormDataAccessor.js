import React from 'react';
import PropTypes from 'prop-types';

export default class FormDataAccesor extends React.Component {
    static contextTypes = {
        formProps: PropTypes.object.isRequired,
        uiFactory: PropTypes.object.isRequired
    };

    static propTypes = {
        render: PropTypes.func.isRequired
    };

    render() {
        const { formProps, uiFactory } = this.props;
        const { render } = this.props;

        return render(formProps, uiFactory);
    }
}