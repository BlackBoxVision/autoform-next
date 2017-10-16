import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CheckBox extends React.Component {
    static displayName = 'CheckBox';

    static propTypes = {
        fullWidth: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'checkbox'
    };

    render() {
        const { input: { name, ...inputProps }, label, type, translate, fullWidth } = this.props;

        return (
            <FormGroup className={css({ "col-md-12": fullWidth })} check>
                <Label for={name} check>
                    <Input id={name} name={name} type={type} {...inputProps} />
                    {translate(name, 'label', label)}
                </Label>
            </FormGroup>
        );
    }
}
