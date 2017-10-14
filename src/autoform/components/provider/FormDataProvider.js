import React from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';

export default class FormDataProvider extends React.Component {
    static propTypes = {
        isDebugEnabled: PropTypes.bool.isRequired,
        formProps: PropTypes.object.isRequired,
        uiFactory: PropTypes.object.isRequired,
        children: PropTypes.any,
        i18n: PropTypes.any
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
        if (this.props.i18n) {
            return (
                <I18nextProvider i18n={this.props.i18n}>
                    {React.Children.only(this.props.children)}
                </I18nextProvider>
            );
        }

        return React.Children.only(this.props.children);
    }
}
