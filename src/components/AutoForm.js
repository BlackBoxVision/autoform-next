import React from 'react';
import PropTypes from 'prop-types';

import iterateChildren from '../utils';

export default class AutoForm extends React.Component {
    static displayName = "AutoForm";

    static propTypes = {
        element: PropTypes.string.isRequired,
        children: PropTypes.any.isRequired,
        onSubmit: PropTypes.func.isRequired,
        formName: PropTypes.string.isRequired,
        uiAdapter: PropTypes.object.isRequired
    };

    static defaultProps = {
        element: "Form"
    };

    render() {
        const { uiAdapter, element, children, onSubmit, formName } = this.props;
        const FormElement = uiAdapter[element];

        return (
            <FormElement name={formName} onSubmit={onSubmit}>
                {iterateChildren(children, this.renderChildren)}
            </FormElement>
        )
    }

    //TODO add validations
    renderChildren = ({ element, displayName, ...rest }) => {
        switch (displayName) {
            case "AutoFormSubmit":
            case "AutoFormElement":
            default:
                return this.props.uiAdapter[element](rest);
        }
    }
}