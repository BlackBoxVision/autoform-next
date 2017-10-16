import React from 'react';

import { FormGroup } from 'reactstrap';

export default class Group extends React.Component {
    render() {
        const { children, name, isDebugEnabled, formProps, uiFactory, translate, title, t, ...props } = this.props;

        return (
            <FormGroup {...props} row>
                <FormGroup className="col-md-12">
                    <h5>{translate(name, 'title', title)}</h5>
                </FormGroup>
                <br />
                {children}
            </FormGroup>
        );
    }
}
