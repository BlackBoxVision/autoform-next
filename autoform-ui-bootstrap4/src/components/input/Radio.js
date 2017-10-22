import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Radio extends React.Component {
    static displayName = 'Radio';

    static propTypes = {
        fullWidth: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'radio'
    };

    render() {
        const { input, options, helpText, ...rest } = this.props;
        const { translate, t, uiFactory, isDebugEnabled, reduxFormProps, big, small, ...newProps } = rest;
        const messages = this.getMessages();
        const classes = this.getClasses();
        const name = this.getInputName();

        return (
            <FormGroup className={classes.input}>
                <Label className={classes.label}>{messages.label}</Label>
                <fieldset {...input}>{options.map(this.renderRadio)}</fieldset>
                {helpText && (
                    <FormText id={name} color="muted">
                        {messages.helpText}
                    </FormText>
                )}
            </FormGroup>
        );
    }

    renderRadio = ({ value, text }, index) => {
        const { type, translate } = this.props;
        const classes = this.getClasses();
        const name = this.getInputName();

        return (
            <FormGroup key={`radio.${index}`} className={classes.radio} check>
                <Label for={name} check>
                    <Input id={name} name={name} type={type} value={value} />
                    {` ${translate(name, `radio.${index}`, text)}`}
                </Label>
            </FormGroup>
        );
    };

    hasError = _ => this.props.meta && this.props.meta.error && this.props.meta.touched;

    getClasses() {
        const {
            meta,
            big,
            small,
            col,
            fullWidth
        } = this.props;

        return {
            container: css({ [`col-md-${col}`]: !!col }),
            label: 'col-form-label',
            input: css({
                'form-control-lg': big,
                'form-control-sm': small,
                'is-invalid': meta && meta.error && meta.touched,
                'is-valid': meta && !meta.error && meta.touched,
                [`col-md-${col}`]: !!col
            }),
            radio: css({
                'col-md-12': fullWidth
            })
        };
    }

    getMessages() {
        const { meta, label, helpText, translate } = this.props;
        const name = this.getInputName()

        return {
            //error in meta should be the key of the message to translate
            error: meta ? translate(name, meta.error, meta.error) : null,
            helpText: translate(name, 'helpText', helpText),
            label: translate(name, 'label', label)
        };
    }

    getInputName = _ => this.props.name ? this.props.name : this.props.input.name;
}
