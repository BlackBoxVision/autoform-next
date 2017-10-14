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
        const { isDebugEnabled, formProps, uiFactory } = this.props;

        return {
            isDebugEnabled,
            formProps,
            uiFactory
        };
    }

    render() {
        const { i18n, children } = this.props;

        if (i18n) {
            return (
                <I18nextProvider i18n={i18n}>
                    {React.Children.only(children)}
                </I18nextProvider>
            );
        }

        return React.Children.only(children);
    }
}
