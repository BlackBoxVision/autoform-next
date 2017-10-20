import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default class TextInput extends React.Component {
    static displayName = 'TextInput';

    static propTypes = {
        col: PropTypes.number,
        placeholder: PropTypes.string,
        helpText: PropTypes.any,
        readOnly: PropTypes.bool,
        big: PropTypes.bool,
        small: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.any,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'text',
        readOnly: false,
        small: false,
        big: false
    };

    render() {
        const { input: { name, ...rest }, type, children, readOnly } = this.props;

        const { containerClassName, inputClassName, labelClassName } = this.getClassNames();
        const { label, placeholder, helpText, error } = this.getMessages();
        const hasError = this.hasError();

        return (
            <FormGroup className={containerClassName}>
                <Label for={name} className={labelClassName}>
                    {label}
                </Label>
                <Input
                    className={inputClassName}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    valid={hasError}
                    name={name}
                    type={type}
                    id={name}
                    {...rest}
                >
                    {children}
                </Input>
                {helpText && (
                    <FormText id={name} color="muted">
                        {helpText}
                    </FormText>
                )}
                <FormFeedback>
                    {error}
                </FormFeedback>
            </FormGroup>
        );
    }

    hasError = _ => this.props.meta.error && this.props.meta.touched;    

    getClassNames() {
        const { meta: { error, touched }, big, small, col } = this.props;

        return {
            containerClassName: css({ [`col-md-${col}`]: !!col }),
            labelClassName: 'col-form-label',
            inputClassName: css({
                'form-control-lg': big,
                'form-control-sm': small,
                'is-invalid': error && touched,
                'is-valid': !error && touched
            })
        };
    };

    getMessages() {
        const { input: { name }, meta: { error }, placeholder, helpText, label, translate } = this.props;

        return {
            //error in meta should be the key of the message to translate
            placeholder: translate(name, 'placeholder', placeholder),
            helpText: translate(name, 'helpText', helpText),
            label: translate(name, 'label', label),
            error: translate(name, error, error)
        };
    };
}