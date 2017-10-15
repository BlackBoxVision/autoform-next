import React from 'react';

export default class Group extends React.Component {
    render() {
        const { children, name, isDebugEnabled, formProps, uiFactory, translate, title, ...props } = this.props;

        return (
            <div className="form-row" {...props}>
                <div className="form-group col-md-12">
                    <h5>{translate(`${name}.title`) || title}</h5>
                </div>
                {children}
            </div>
        );
    }
}
