import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

//TODO add conditional render component
//TODO extract helper-text and validation-feedback to helper components
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
            placeholder,
            translate,
            col
        } = this.props;

        const colSize = `col-md-${col}`;
        const containerClassName = css('form-group', {
            [colSize]: !!col
        });
        const inputClassName = css('form-control', {
            'form-control-lg': big,
            'form-control-sm': small,
            'is-invalid': error && touched,
            'is-valid': !error && touched
        });

        return (
            <div className={containerClassName}>
                <label className="col-form-label" htmlFor={name}>
                    {translate(`${name}.label`) || label}
                </label>
                <input
                    className={inputClassName}
                    placeholder={translate(`${name}.placeholder`) || placeholder}
                    readOnly={readOnly}
                    name={name}
                    type={type}
                    id={name}
                    {...inputProps}
                >
                    {children}
                </input>
                {helpText && (
                    <small id={`${name}-help-text`} className="form-text text-muted">
                        {translate(`${name}.helpText`) || helpText}
                    </small>
                )}
                {error && touched && <div className="invalid-feedback">{error}</div>}
            </div>
        );
    }
}
