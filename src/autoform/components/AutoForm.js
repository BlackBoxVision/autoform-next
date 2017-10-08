import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, propTypes } from 'redux-form';

import Utils from '../../utils';

import FormFieldRenderer from "./form/FormFieldRenderer";
import ErrorBoundary from "./error/ErrorBoundary";

class AutoForm extends React.PureComponent {
    static displayName = "AutoForm";

    static propTypes = {
        ...propTypes,
        renderError: PropTypes.func,
        children: PropTypes.any.isRequired,
        component: PropTypes.string.isRequired,
        uiAdapter: PropTypes.object.isRequired,
        onFormError: PropTypes.func.isRequired,

        //redux-form props
        initialValues: PropTypes.object,
        form: PropTypes.string,
        formKey: PropTypes.string,
        onSubmit: PropTypes.func,
        onSubmitFail: PropTypes.func,
        handleSubmit: PropTypes.func,
        onSubmitSuccess: PropTypes.func,
        readonly: PropTypes.bool,
        touchOnBlur: PropTypes.bool,
        touchOnChange: PropTypes.bool,
        destroyOnUnmount: PropTypes.bool,
        alwaysAsyncValidate: PropTypes.bool,
        returnRejectedSubmitPromise: PropTypes.bool,
        overwriteOnInitialValuesChange: PropTypes.bool,
    };

    static defaultProps = {
        element: "Form",
        onFormError: (error, info) => {
            console.info(error.message);
            console.info(info.componentStack);
        }
    };

    render() {
        const { uiAdapter, component, children, onSubmit, form, handleSubmit, onFormError, renderError } = this.props;
        const Form = uiAdapter[component];

        return (
            <ErrorBoundary render={renderError} onFormError={onFormError}>
                <Form name={form} onSubmit={handleSubmit(onSubmit)}>
                    {Utils.iterateChildren(children, this.renderChildren)}
                </Form>
            </ErrorBoundary>
        );
    }

    renderChildren = ({ index, ...props }) => (
        <FormFieldRenderer
            key={`form-field-renderer.${index}`}
            uiAdapter={this.props.uiAdapter}
            {...props}
        />
    );
}

//TODO move to decorator
export default reduxForm()(AutoForm);