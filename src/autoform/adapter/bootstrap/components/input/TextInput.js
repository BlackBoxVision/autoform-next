import React from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends React.Component {
    static displayName = "TextInput";

    static propTypes = {
        children: PropTypes.any,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    render() {
        const { children, input, meta, ...rest } = this.props;

        return (
            <div className="form-group">
                <label htmlFor={rest.name}>
                    {rest.label}
                </label>
                <input className="form-control" placeholder={rest.label} value={input.value} onChange={input.onBlur} {...rest}>
                    {children}
                </input>
            </div>
        )
    }
}