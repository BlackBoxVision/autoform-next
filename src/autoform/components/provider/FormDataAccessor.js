import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class FormDataAccessor extends React.Component {
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
            translate: this.patchTranslate,
            t: this.props.t
        });
    }

    patchTranslate = (field, type, text) => {
        if (this.props.t) {
            const translated = this.props.t(`${field}.${type}`);

            return translated.includes(type) ? text : translated;
        }

        return text;
    }
}

export default translate()(FormDataAccessor);