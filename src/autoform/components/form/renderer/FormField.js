import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FormDataAccessor from '../../provider/FormDataAccessor';

//TODO add validations
export default class FormFieldRenderer extends React.PureComponent {
    static displayName = 'FormFieldRenderer';

    static propTypes = {
        uiFactory: PropTypes.object.isRequired,
        component: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired
    };

    render() {
        const { component, displayName, uiFactory, ...rest } = this.props;

        if (displayName === 'FormField') {
            return (
                <Field
                    component={this.renderField}
                    name={rest.name}
                    type={rest.type}
                    {...rest}
                />
            );
        } else {
            return this.renderField(rest);
        }
    }

    renderField = rest => (
        <FormDataAccessor render={props => this.renderComponent({ ...rest, ...props })} />
    );

    renderComponent = props => this.props.uiFactory[this.props.component](props);
}
