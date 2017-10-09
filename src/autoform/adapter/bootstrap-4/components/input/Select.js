import React from 'react';
import PropTypes from 'prop-types';

//TODO multiple is not working yet, review how to fix it
export default class Select extends React.Component {
    static displayName = "Select";

    static propTypes = {
        multiple: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        options: PropTypes.array,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        multiple: false
    };

    render() {
        const { input: { name, ...inputProps }, meta, label, type, options, multiple } = this.props;

        return (
            <div className="form-group">
                <div>
                    <label htmlFor={name}>
                        {label}
                    </label>
                </div>
                <select className="form-control" id={name} name={name} multiple={multiple} {...inputProps}>
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