import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

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

        switch (displayName) {
            case 'FormField':
                return (
                    <Field
                        {...rest}
                        name={rest.name}
                        type={rest.type}
                        componentType={component}
                        component={this.formField}
                    />
                );
            case 'FormGroup':
            case 'FormSubmit':
            default:
                return uiFactory[component](rest);
        }
    }

    formField = ({ componentType, ...rest }) => this.props.uiFactory[componentType](rest);
}