import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes } from 'redux-form';

import Helper from '../helper';

import FormDataProvider from './provider/FormDataProvider';
import FormFieldRenderer from './form/FormFieldRenderer';
import FormGroupRenderer from './form/FormGroupRenderer';
import ErrorBoundary from './error/ErrorBoundary';

class AutoForm extends React.PureComponent {
    static displayName = 'AutoForm';

    static propTypes = {
        ...propTypes,
        title: PropTypes.string.isRequired,
        renderError: PropTypes.func,
        children: PropTypes.any.isRequired,
        component: PropTypes.string.isRequired,
        uiAdapter: PropTypes.object.isRequired,
        onFormError: PropTypes.func.isRequired,

        //redux-form props
        pristine: PropTypes.bool,
        submitting: PropTypes.bool,
        initialValues: PropTypes.object,
        form: PropTypes.string,
        formKey: PropTypes.string,
        onSubmit: PropTypes.func,
        onSubmitFail: PropTypes.func,
        handleSubmit: PropTypes.func,
        onSubmitSuccess: PropTypes.func,
        reset: PropTypes.func,
        readonly: PropTypes.bool,
        touchOnBlur: PropTypes.bool,
        touchOnChange: PropTypes.bool,
        destroyOnUnmount: PropTypes.bool,
        alwaysAsyncValidate: PropTypes.bool,
        returnRejectedSubmitPromise: PropTypes.bool,
        overwriteOnInitialValuesChange: PropTypes.bool
    };

    static defaultProps = {
        component: 'Form',
        onFormError: (error, info) => {
            console.info(error.message);
            console.info(info.componentStack);
        }
    };

    render() {
        const {
            uiAdapter,
            component,
            children,
            onSubmit,
            form,
            handleSubmit,
            onFormError,
            renderError,
            title
        } = this.props;
        const formProps = this.getFormProps();
        const Form = uiAdapter[component];

        return (
            <FormDataProvider formProps={formProps} uiAdapter={uiAdapter}>
                <ErrorBoundary render={renderError} onError={onFormError}>
                    <Form name={form} onSubmit={handleSubmit(onSubmit)}>
                        <legend>{title}</legend>
                        {Helper.renderForm(children, this.renderFormGroup, this.renderFormField)}
                    </Form>
                </ErrorBoundary>
            </FormDataProvider>
        );
    }

    renderFormGroup = ({ index, ...props }) => (
        <FormGroupRenderer key={`form-group-renderer.${index}`} uiAdapter={this.props.uiAdapter} {...props} />
    );

    renderFormField = ({ index, ...props }) => (
        <FormFieldRenderer key={`form-field-renderer.${index}`} uiAdapter={this.props.uiAdapter} {...props} />
    );

    getFormProps = () => {
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
        const formProps = {};

        //TODO evaluate using arr.reduce to reduce data to { }
        reduxFormProps.forEach(reduxFormProp => {
            if (this.props.hasOwnProperty(reduxFormProp) && this.props[reduxFormProp] !== undefined) {
                formProps[reduxFormProp] = this.props[reduxFormProp];
            }
        });

        return formProps;
    };
}

//TODO move to decorator
export default reduxForm()(AutoForm);
