import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class FormDataAccesor extends React.Component {
    static contextTypes = {
        isDebugEnabled: PropTypes.bool.isRequired,
        formProps: PropTypes.object.isRequired,
        uiFactory: PropTypes.object.isRequired
    };

    static propTypes = {
        render: PropTypes.func.isRequired
    };

    render() {
        return this.props.render({
            isDebugEnabled: this.context.isDebugEnabled,
            formProps: this.context.formProps,
            uiFactory: this.context.uiFactory,
            translate: this.props.t
        });
    }
}

export default translate()(FormDataAccesor);