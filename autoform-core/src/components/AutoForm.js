import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes } from 'redux-form';

import FormHelper from '../helper';

import ErrorBoundary from './error/ErrorBoundary';
import FormFieldRenderer from './form/renderer/FormField';
import FormGroupRenderer from './form/renderer/FormGroup';
import FormDataProvider from './provider/FormDataProvider';
import FormDataAccessor from './provider/FormDataAccessor';

@reduxForm()
export default class AutoForm extends React.PureComponent {
    static displayName = 'AutoForm';

    static propTypes = {
        ...propTypes,
        debug: PropTypes.bool,
        schema: PropTypes.any,
        children: PropTypes.any,
        locale: PropTypes.string,
        fallbackLocale: PropTypes.string,
        renderError: PropTypes.func,
        translations: PropTypes.object,
        title: PropTypes.string.isRequired,
        component: PropTypes.string.isRequired,
        uiFactory: PropTypes.object.isRequired,
        onFormError: PropTypes.func.isRequired,

        //redux-form props
        initialValues: PropTypes.object,
        form: PropTypes.string,
        formKey: PropTypes.string,
        reset: PropTypes.func,
        onSubmit: PropTypes.func,
        onSubmitFail: PropTypes.func,
        handleSubmit: PropTypes.func,
        onSubmitSuccess: PropTypes.func,
        readonly: PropTypes.bool,
        pristine: PropTypes.bool,
        submitting: PropTypes.bool,
        touchOnBlur: PropTypes.bool,
        touchOnChange: PropTypes.bool,
        destroyOnUnmount: PropTypes.bool,
        alwaysAsyncValidate: PropTypes.bool,
        returnRejectedSubmitPromise: PropTypes.bool,
        overwriteOnInitialValuesChange: PropTypes.bool
    };

    static defaultProps = {
        debug: false,
        locale: 'en',
        component: 'Form',
        fallbackLocale: 'en',
        renderError: (error, info) => (
            <div>
                <div>{error.message}</div>
                <div>{info.componentStack}</div>
            </div>
        ),
        onFormError: (error, info) => {
            console.error(error.message);
            console.error(info.componentStack);
        }
    };

    state = {
        //Load i18n via state to prevent issues on render
        i18n: FormHelper.getI18n(this.props)
    };

    componentWillReceiveProps(nextProps) {
        //Check if there's a locale change, to regenerate i18n instance based on newProps
        if (nextProps.locale !== this.props.locale && nextProps.fallbackLocale !== this.props.fallbackLocale) {
            this.setState(prevState => ({
                i18n: FormHelper.getI18n(nextProps)
            }));
        }
    }

    render() {
        const { renderError, onFormError, uiFactory, debug } = this.props;
        const formProps = FormHelper.getReduxFormProps(this.props);

        return (
            <ErrorBoundary render={renderError} onError={onFormError}>
                <FormDataProvider i18n={this.state.i18n} formProps={formProps} uiFactory={uiFactory} isDebugEnabled={debug}>
                    <FormDataAccessor render={this.renderForm} />
                </FormDataProvider>
            </ErrorBoundary>
        );
    }

    renderForm = props => { 
        const { handleSubmit, onSubmit, title, form } = this.props;
        
        const formChildren = FormHelper.getChildren(this.props, this.renderGroup, this.renderField);
        const Form = FormHelper.getForm(this.props);

        return (
            <Form name={form} title={title} onSubmit={handleSubmit(onSubmit)} {...props}>
                {formChildren}
            </Form>
        );
    };

    renderGroup = (props, index) => <FormGroupRenderer key={`group-renderer.${index}`} {...props} />;

    renderField = (props, index) => <FormFieldRenderer key={`field-renderer.${index}`} {...props} />;
}
