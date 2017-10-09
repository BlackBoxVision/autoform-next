import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
    static displayName = "TextInput";

    static propTypes = {
        type: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.any,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    render() {
        const { input: { name, ...inputProps }, meta, label, type, children } = this.props;

        return (
            <div className="form-group">
                <label htmlFor={name}>
                    {label}
                </label>
                <input className="form-control" id={name} name={name} type={type} placeholder={label} {...inputProps}>
                    {children}
                </input>
            </div>
        )
    }
}