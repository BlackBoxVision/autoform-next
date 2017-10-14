import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes } from 'redux-form';

import Helper from '../helper';

import FormDataProvider from './provider/FormDataProvider';
import FormFieldRenderer from './form/renderer/FormField';
import FormGroupRenderer from './form/renderer/FormGroup';
import ErrorBoundary from './error/ErrorBoundary';
import Check from './base/Check';

class AutoForm extends React.PureComponent {
    static displayName = 'AutoForm';

    static propTypes = {
        ...propTypes,
        schema: PropTypes.object,
        renderError: PropTypes.func,
        title: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
        component: PropTypes.string.isRequired,
        uiFactory: PropTypes.object.isRequired,
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
        const { handleSubmit, onFormError, renderError, component, uiFactory, onSubmit, title, form } = this.props;
        const schemaAndChildrenCheck = this.checkSchemaAndChildren();
        const reduxFormProps = this.getReduxFormProps();
        const Form = uiFactory[component];

        return (
            <FormDataProvider formProps={reduxFormProps} uiFactory={uiFactory}>
                <ErrorBoundary render={renderError} onError={onFormError}>
                    <Form name={form} title={title} onSubmit={handleSubmit(onSubmit)}>
                        <Check
                            condition={schemaAndChildrenCheck} 
                            onCondition={this.renderAutoFormContent} 
                            onInvalidCondition={this.renderAutoFormContentLegacy}
                        />
                    </Form>
                </ErrorBoundary>
            </FormDataProvider>
        );
    }

    checkSchemaAndChildren = _ => !this.props.schema && React.Children.count(this.props.children) > 0;

    renderAutoFormContent = () => Helper.renderFormContent(
        this.props.children, 
        this.renderFormGroup,
        this.renderFormField
    );

    //TODO define how to render legacy form via schema
    renderAutoFormContentLegacy = () => Helper.renderFormContentLegacy(
        this.props.schema, 
        this.renderFormGroup, 
        this.renderFormField
    );    

    renderFormGroup = ({ index, ...props }) => (
        <FormGroupRenderer
            key={`form-group-renderer.${index}`} 
            uiFactory={this.props.uiFactory} 
            {...props} 
        />
    );

    renderFormField = ({ index, ...props }) => (
        <FormFieldRenderer 
            key={`form-field-renderer.${index}`} 
            uiFactory={this.props.uiFactory} 
            {...props} 
        />
    );

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
