import React from 'react';
import PropTypes from 'prop-types';

import iterateChildren from '../utils';

export default class AutoForm extends React.Component {
    static displayName = "AutoForm";

    static propTypes = {
        children: PropTypes.any.isRequired,
        onSubmit: PropTypes.func.isRequired,
        formName: PropTypes.string.isRequired,
        uiAdapter: PropTypes.object.isRequired
    };

    render() {
        const { children, onSubmit, formName } = this.props;

        return (
            <form name={formName} onSubmit={onSubmit}>
                {iterateChildren(children, this.renderChildren)}
            </form>
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