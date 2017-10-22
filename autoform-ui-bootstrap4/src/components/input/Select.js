import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

//TODO multiple is not working yet, review how to fix it
export default class Select extends React.Component {
    static displayName = 'Select';

    static propTypes = {
        col: PropTypes.number,
        placeholder: PropTypes.string,
        helpText: PropTypes.any,
        readOnly: PropTypes.bool,
        big: PropTypes.bool,
        small: PropTypes.bool,
        multiple: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        options: PropTypes.array,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'select',
        readOnly: false,
        multiple: false,
        small: false,
        big: false
    };

    render() {
        const { input, options, multiple, readOnly, type, helpText, ...rest } = this.props;
        const { translate, t, uiFactory, isDebugEnabled, reduxFormProps, big, small, ...newProps } = rest;
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
                    multiple={multiple}
                    readOnly={readOnly}
                    valid={hasError}
                    type={type}
                    name={name}
                    id={name}
                    {...input}
                >
                    {options.map(this.renderOptions)}
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

    renderOptions = ({ value, text }, index) => {
        const name = this.getInputName();

        return (
            <option key={`option.${index}`} value={value}>
                {` ${this.props.translate(name, `option.${index}`, text)}`}
            </option>
        );
    };

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
        const { meta, placeholder, helpText, label, translate } = this.props;
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
