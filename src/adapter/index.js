import React from 'react';

export default {
    Form: ({ children, ...rest }) => (
        <form {...rest}>
            {children}
        </form>
    ),
    FormInline: ({ children, ...rest }) => (
        <form className="form-inline" {...rest}>
            {children}
        </form>
    ),
    TextInput: ({ children, ...rest }) => (
        <div className="form-group">
            <label htmlFor={rest.name}>
                {rest.label}
            </label>
            <input className="form-control" placeholder={rest.label} {...rest}>
                {children}
            </input>
        </div>
    ),
    Button: ({ label, ...rest }) => (
        <button className="btn btn-primary" {...rest}>
            {label}
        </button>
    )
};