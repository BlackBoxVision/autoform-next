import React from 'react';

export default class Group extends React.Component {
    render() {
        const { children, name, isDebugEnabled, formProps, uiFactory, translate, title, ...props } = this.props;

        return (
            <div className="form-row" {...props}>
                <div className="form-group col-md-12">
                    <legend>{translate(`${name}.title`) || title}</legend>
                </div>
                {children}
            </div>
        );
    }
}
