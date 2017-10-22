import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input } from 'reactstrap';

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
        const { input, type } = this.props;
        const messages = this.getMessages();
        const classes = this.getClasses();
        const name = this.getInputName();

        return (
            <FormGroup className={classes.container} check>
                <Label for={name} check>
                    <Input id={name} name={name} type={type} {...input} />
                    {` ${messages.label}`}
                </Label>
            </FormGroup>
        );
    }

    getClasses() {
        const { fullWidth } = this.props;

        return {
            container: css({
                'col-md-12': fullWidth
            })
        };
    }

    getMessages() {
        const { label, translate } = this.props;
        const name = this.getInputName();

        return {
            label: translate(name, 'label', label)
        };
    }

    getInputName = _ => this.props.name ? this.props.name : this.props.input.name;
}
