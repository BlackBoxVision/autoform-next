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
        const { name, input, options } = this.props;
        const { inputClassName, labelClassName } = this.getClassNames();
        const { label, helpText } = this.getMessages();

        return (
            <FormGroup className={inputClassName}>
                <Label className={labelClassName}>{label}</Label>
                <fieldset {...input}>{options.map(this.renderRadio)}</fieldset>
                {helpText && (
                    <FormText id={name} color="muted">
                        {helpText}
                    </FormText>
                )}
            </FormGroup>
        );
    }

    renderRadio = ({ value, text }, index) => {
        const { name, type, translate } = this.props;
        const { radioClassName } = this.getClassNames();

        return (
            <FormGroup key={`radio.${index}`} className={radioClassName} check>
                <Label for={name} check>
                    <Input id={name} name={name} type={type} value={value} />
                    {` ${translate(name, `radio.${index}`, text)}`}
                </Label>
            </FormGroup>
        );
    };

    hasError = _ => this.props.meta && this.props.meta.error && this.props.meta.touched;

    getClassNames() {
        const {
            meta,
            big,
            small,
            col,
            fullWidth
        } = this.props;

        return {
            containerClassName: css({ [`col-md-${col}`]: !!col }),
            labelClassName: 'col-form-label',
            inputClassName: css({
                'form-control-lg': big,
                'form-control-sm': small,
                'is-invalid': meta && meta.error && meta.touched,
                'is-valid': meta && !meta.error && meta.touched,
                [`col-md-${col}`]: !!col
            }),
            radioClassName: css({
                'col-md-12': fullWidth
            })
        };
    }

    getMessages() {
        const { name, meta, label, helpText, translate } = this.props;

        return {
            //error in meta should be the key of the message to translate
            error: meta && translate(name, meta.error, meta.error),
            helpText: translate(name, 'helpText', helpText),
            label: translate(name, 'label', label)
        };
    }
}
