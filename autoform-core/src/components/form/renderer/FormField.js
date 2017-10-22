import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, Fields } from 'redux-form';

import FormDataAccessor from '../../provider/FormDataAccessor';
import { Component } from '../../../helper/form';

//TODO add validations
export default class FormFieldRenderer extends React.PureComponent {
    static displayName = 'FormFieldRenderer';

    static propTypes = {
        component: PropTypes.string.isRequired,
        uiFactory: PropTypes.object.isRequired,
        displayName: PropTypes.string.isRequired
    };

    static defaultProps = {
        component: 'TextInput'
    };

    render() {
        const { component, displayName, uiFactory, ...rest } = this.props;
        const name = `Auto${displayName}`;

        switch (name) {
            case Component.FIELD:
                return <Field component={this.renderField} {...rest} />;
            case Component.FIELD_ARRAY:
                return <FieldArray component={this.renderField} {...rest} />;
            case Component.FIELD_ENTITY:
                return <Fields component={this.renderField} {...rest} />;
            default:
                return this.renderField(rest);
        }
    }

    renderField = rest => (
        <FormDataAccessor render={props => this.props.uiFactory[this.props.component]({ ...rest, ...props })} />
    );
}
