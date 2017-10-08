import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
    static displayName = "Select";

    static propTypes = {
        type: PropTypes.string,
        label: PropTypes.string,
        options: PropTypes.array,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    render() {
        const { input: { name, ...inputProps }, meta, label, type, options } = this.props;

        return (
            <div className="form-group">
                <div>
                    <label htmlFor={name}>
                        {label}
                    </label>
                </div>
                <select className="custom-select" id={name} name={name} {...inputProps}>
                    {options.map(this.renderOptions)}
                </select>
            </div>
        )
    }

    renderOptions = ({ value, text }, index) => (
        <option key={`select-option.${index}`} value={value}>
            {text}
        </option>
    );
}