import React from 'react';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { reduxForm, propTypes } from 'redux-form';

import ErrorBoundary from './error/ErrorBoundary';
import FormFieldRenderer from './form/renderer/FormField';
import FormGroupRenderer from './form/renderer/FormGroup';
import FormDataProvider from './provider/FormDataProvider';

import FormHelper from '../helper';
import SchemaCompat from '../compat';

class AutoForm extends React.PureComponent {
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
        locale: 'en',
        fallbackLocale: 'en',
        debug: false,
        component: 'Form',
        renderError: (error, info) => (
            <div>
                <div>{error.message}</div>
                <div>{info.componentStack}</div>
            </div>
        ),
        onFormError: (error, info) => {
            console.info(error.message);
            console.info(info.componentStack);
        }
    };

    render() {
        const { renderError, onFormError, uiFactory, handleSubmit, onSubmit, title, form, debug } = this.props;
        const reduxFormProps = this.getReduxFormProps();
        const children = this.getChildren();
        const Form = this.getForm();
        const i18n = this.getI18n();

        return (
            <ErrorBoundary render={renderError} onError={onFormError}>
                <FormDataProvider i18n={i18n} formProps={reduxFormProps} uiFactory={uiFactory} isDebugEnabled={debug}>        
                    <Form name={form} title={title} onSubmit={handleSubmit(onSubmit)}>
                        {children}
                    </Form>    
                </FormDataProvider>
            </ErrorBoundary>
        );
    }

    renderGroup = (props, index) => (
        <FormGroupRenderer
            key={`form-group-renderer.${index}`} 
            uiFactory={this.props.uiFactory} 
            {...props} 
        />
    );

    renderField = (props, index) => (
        <FormFieldRenderer 
            key={`form-field-renderer.${index}`} 
            uiFactory={this.props.uiFactory} 
            {...props} 
        />
    );
       
    getI18n = _ => {
        const { translations, fallbackLocale, locale } = this.props;

        if (translations) {
            return i18next.init({ 
                lng: locale, 
                fallbackLng: fallbackLocale,
                resources: translations,
            });
        }

        return false;
    };

    getChildren = _ => {
        const newChildren = this.props.schema ? SchemaCompat.asReactChildren(this.props.schema) : this.props.children;

        return FormHelper.getChildren(newChildren, this.renderGroup, this.renderField);
    };

    getForm = _ => this.props.uiFactory[this.props.component];

    getReduxFormProps = () => {
        const reduxFormProps = [
            'initialValues',
            'form',
            'formKey',
            'onSubmit',
            'onSubmitFail',
            'handleSubmit',
            'onSubmitSuccess',
            'reset',
            'readonly',
            'touchOnBlur',
            'touchOnChange',
            'destroyOnUnmount',
            'alwaysAsyncValidate',
            'returnRejectedSubmitPromise',
            'overwriteOnInitialValuesChange',
            'pristine',
            'submitting'
        ];

        const reducer = (accum, reduxFormProp) => {
            if (this.props.hasOwnProperty(reduxFormProp) && this.props[reduxFormProp] !== undefined) {
                accum[reduxFormProp] = this.props[reduxFormProp];
            }

            return accum;
        };

        return reduxFormProps.reduce(reducer, {});;
    };
}

//TODO move to decorator
export default reduxForm()(AutoForm);
