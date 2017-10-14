import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes } from 'redux-form';

import FormDataProvider from './provider/FormDataProvider';
import FormFieldRenderer from './form/renderer/FormField';
import FormGroupRenderer from './form/renderer/FormGroup';
import ErrorBoundary from './error/ErrorBoundary';

import FormHelper from '../helper';
import Compat from '../compat';

class AutoForm extends React.PureComponent {
    static displayName = 'AutoForm';

    static propTypes = {
        ...propTypes,
        debug: PropTypes.bool,
        schema: PropTypes.any,
        children: PropTypes.any,
        renderError: PropTypes.func,
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

        return (
            <ErrorBoundary render={renderError} onError={onFormError}>
                <FormDataProvider formProps={reduxFormProps} uiFactory={uiFactory} isDebugEnabled={debug}>        
                    <Form name={form} title={title} onSubmit={handleSubmit(onSubmit)}>
                        {FormHelper.renderContent(children, this.renderFormGroup, this.renderFormField)}
                    </Form>    
                </FormDataProvider>
            </ErrorBoundary>
        );
    }

    renderFormGroup = (props, index) => (
        <FormGroupRenderer
            key={`form-group-renderer.${index}`} 
            uiFactory={this.props.uiFactory} 
            {...props} 
        />
    );

    renderFormField = (props, index) => (
        <FormFieldRenderer 
            key={`form-field-renderer.${index}`} 
            uiFactory={this.props.uiFactory} 
            {...props} 
        />
    );

    hasChildren = _ => !this.props.schema && React.Children.count(this.props.children) > 0;
        
    getChildren = _ => this.hasChildren() ? this.props.children : Compat.mapSchemaAsChildren(this.props.schema);      

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
