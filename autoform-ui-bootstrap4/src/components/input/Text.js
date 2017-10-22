import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default class TextInput extends React.Component {
    static displayName = 'TextInput';

    static propTypes = {
        rows: PropTypes.number,
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
        const { input, type, children, readOnly, helpText, ...newProps } = this.props;
        const messages = this.getMessages();
        const classes = this.getClasses();
        const hasError = this.hasError();
        const name = this.getInputName();
        
        return (
            <FormGroup className={classes.container}>
                <Label className={classes.label} for={name}>
                    {messages.label}
                </Label>
                <Input
                    placeholder={messages.placeholder}
                    className={classes.input}
                    readOnly={readOnly}
                    valid={hasError}
                    name={name}
                    type={type}
                    id={name}
                    {...input}
                    {...newProps}
                >
                    {children}
                </Input>
                {helpText && (
                    <FormText id={name} color="muted">
                        {messages.helpText}
                    </FormText>
                )}
                {messages.error && hasError && <FormFeedback>{messages.error}</FormFeedback>}
            </FormGroup>
        );
    }

    hasError = _ => this.props.meta && this.props.meta.error && this.props.meta.touched;

    getClasses() {
        const { meta, big, small, col } = this.props;

        return {
            container: css({ [`col-md-${col}`]: !!col }),
            label: 'col-form-label',
            input: css({
                'form-control-lg': big,
                'form-control-sm': small,
                'is-invalid': meta && meta.error && meta.touched,
                'is-valid': meta && !meta.error && meta.touched
            })
        };
    }

    getMessages() {
        const {
            meta,
            placeholder,
            helpText,
            label,
            translate
        } = this.props;
        const name = this.getInputName();

        return {
            //error in meta should be the key of the message to translate
            error: meta ? translate(name, meta.error, meta.error) : null,
            placeholder: translate(name, 'placeholder', placeholder),
            helpText: translate(name, 'helpText', helpText),
            label: translate(name, 'label', label)
        };
    }

    getInputName = _ => this.props.name ? this.props.name : this.props.input.name;
}
