import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

//TODO add conditional render component
//TODO extract helper-text and validation-feedback to helper components
export default class TextInput extends React.Component {
    static displayName = 'TextInput';

    static propTypes = {
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
        type: 'text',
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
            helpText
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
                {error && touched && <div className="invalid-feedback">{error}</div>}
            </div>
        );
    }
}
