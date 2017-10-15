import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

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
        readOnly: false,
        multiple: false,
        big: false,
        small: false
    };

    render() {
        const {
            input: { name, ...inputProps },
            meta: { error, touched },
            label,
            options,
            multiple,
            big,
            small,
            readOnly,
            helpText,
            placeholder,
            col,
            translate
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
                <select
                    className={inputClassName}
                    placeholder={translate(`${name}.placeholder`) || placeholder}
                    multiple={multiple}
                    readOnly={readOnly}
                    name={name}
                    id={name}
                    {...inputProps}
                >
                    {options.map(this.renderOptions)}
                </select>
                {helpText && (
                    <small id={`${name}-help-text`} className="form-text text-muted">
                        {translate(`${name}.helpText`) || helpText}
                    </small>
                )}
            </div>
        );
    }

    renderOptions = ({ value, text }, index) => (
        <option key={`select-option.${index}`} value={value}>
            {text}
        </option>
    );
}
