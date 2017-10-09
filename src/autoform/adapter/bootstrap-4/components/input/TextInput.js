import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
    static displayName = 'TextInput';

    static propTypes = {
        validationText: PropTypes.string,
        helpText: PropTypes.string,
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
        readOnly: false,
        big: false,
        small: false
    };

    render() {
        const {
            input: { name, ...inputProps },
            meta: { error, touched },
            label,
            type,
            children,
            big,
            small,
            readOnly,
            helpText,
            validationText
        } = this.props;
        const inputClassName = css('form-control', {
            'form-control-lg': big,
            'form-control-sm': small,
            'is-invalid': error && touched,
            'is-valid': !error && touched
        });

        return (
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                    className={inputClassName}
                    id={name}
                    name={name}
                    type={type}
                    placeholder={label}
                    readOnly={readOnly}
                    aria-describedby={`${name}-help-text`}
                    {...inputProps}
                >
                    {children}
                </input>
                {helpText && (
                    <small id={`${name}-help-text`} className="form-text text-muted">
                        {helpText}
                    </small>
                )}
                {error && touched && <div className="invalid-feedback">{validationText}</div>}
            </div>
        );
    }
}
