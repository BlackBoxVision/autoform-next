import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default class FileInput extends React.Component {
    static displayName = 'FileInput';

    static propTypes = {
        col: PropTypes.number,
        children: PropTypes.any,
        helpText: PropTypes.any,
        big: PropTypes.bool,
        small: PropTypes.bool,
        readOnly: PropTypes.bool,
        multiple: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        meta: PropTypes.object,
        input: PropTypes.object
    };

    static defaultProps = {
        type: 'file',
        multiple: false,
        readOnly: false,
        small: false,
        big: false
    };

    render() {
        const {
            name,
            input: { value, ...rest },
            multiple,
            type,
            children,
            readOnly
        } = this.props;

        const {
            containerClassName,
            inputClassName,
            labelClassName
        } = this.getClassNames();
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
                    multiple={multiple}
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
                <FormFeedback>{error}</FormFeedback>
            </FormGroup>
        );
    }

    hasError = _ => this.props.meta && this.props.meta.error && this.props.meta.touched;

    getClassNames() {
        const { meta, big, small, col } = this.props;

        return {
            containerClassName: css({ [`col-md-${col}`]: !!col }),
            labelClassName: 'col-form-label',
            inputClassName: css({
                'form-control-lg': big,
                'form-control-sm': small,   
                'is-invalid': meta && meta.error && meta.touched,
                'is-valid': meta && !meta.error && meta.touched
            })
        };
    }

    getMessages() {
        const {
            name,
            meta,
            placeholder,
            helpText,
            label,
            translate
        } = this.props;

        return {
            //error in meta should be the key of the message to translate
            placeholder: translate(name, 'placeholder', placeholder),
            error: meta && translate(name, meta.error, meta.error),
            helpText: translate(name, 'helpText', helpText),
            label: translate(name, 'label', label)
        };
    }
}
