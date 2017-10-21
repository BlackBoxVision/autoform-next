import React from 'react';

import { FormGroup } from 'reactstrap';

export default class Group extends React.Component {
    render() {
        const {
            children,
            name,
            isDebugEnabled,
            reduxFormProps,
            uiFactory,
            translate,
            title,
            t,
            ...rest
        } = this.props;

        return (
            <FormGroup {...rest} row>
                <div className="col-md-12">
                    <h5>{translate(name, 'title', title)}</h5>
                </div>
                <br />
                {children}
            </FormGroup>
        );
    }
}
