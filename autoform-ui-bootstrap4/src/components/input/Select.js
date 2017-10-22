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
        const {
            name,
            input,
            options,
            multiple,
            readOnly,
            type
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
                    type={type}
                    name={name}
                    id={name}
                    {...input}
                >
                    {options.map(this.renderOptions)}
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

    renderOptions = ({ value, text }, index) => {
        const { translate, name } = this.props;

        return (
            <option key={`option.${index}`} value={value}>
                {` ${translate(name, `option.${index}`, text)}`}
            </option>
        );
    };

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
