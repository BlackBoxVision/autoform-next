import React from 'react';

export default class Group extends React.Component {
    render() {
        const { children, name, ...props } = this.props;

        return (
            <div className="form-row" {...props}>
                <legend>{name}</legend>
                {children}
            </div>
        );
    }
}