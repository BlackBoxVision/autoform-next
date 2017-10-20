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
        const { input: { name, ...rest }, type } = this.props;

        const { containerClassName } = this.getClassNames();
        const { label } = this.getMessages();

        return (
            <FormGroup className={containerClassName} check>
                <Label for={name} check>
                    <Input id={name} name={name} type={type} {...rest} />
                    {` ${label}`}
                </Label>
            </FormGroup>
        );
    }

    getClassNames() {
        const { fullWidth } = this.props;

        return {
            containerClassName: css({
                'col-md-12': fullWidth
            })
        };
    }

    getMessages() {
        const { input: { name }, label, translate } = this.props;

        return {
            label: translate(name, 'label', label)
        };
    }
}
