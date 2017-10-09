import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

//TODO multiple is not working yet, review how to fix it
export default class Select extends React.Component {
    static displayName = 'Select';

    static propTypes = {
        helpText: PropTypes.string,
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
            meta,
            type,
            label,
            options,
            multiple,
            big,
            small,
            readOnly,
            helpText
        } = this.props;
        const inputClassName = css('form-control', {
            'form-control-lg': big,
            'form-control-sm': small
        });

        return (
            <div className="form-group">
                <div>
                    <label htmlFor={name}>{label}</label>
                </div>
                <select
                    className={inputClassName}
                    id={name}
                    name={name}
                    multiple={multiple}
                    placeholder={label}
                    readOnly={readOnly}
                    aria-describedby={`${name}-help-text`}
                    {...inputProps}
                >
                    {options.map(this.renderOptions)}
                </select>
                {helpText && (
                    <small id={`${name}-help-text`} className="form-text text-muted">
                        {helpText}
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
