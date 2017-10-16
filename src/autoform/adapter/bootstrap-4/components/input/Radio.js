import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input } from 'reactstrap';

export default class Radio extends React.Component {
    static displayName = 'Radio';

    static propTypes = {
        fullWidth: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'radio'
    };

    render() {
        const { input: { name, ...inputProps }, meta: { error, touched }, translate, label, big, small, col, options} = this.props;

        const input = css({
            'form-control-lg': big,
            'form-control-sm': small,
            'is-invalid': error && touched,
            'is-valid': !error && touched,
            [`col-md-${col}`]: !!col
        });

        return (
            <FormGroup className={input}>
                <Label>
                    {` ${translate(name, 'label', label)}`}  
                </Label>
                <FormGroup tag="fieldset" {...inputProps}>
                    {options.map(this.renderRadio)}
                </FormGroup>
            </FormGroup>
        );
    }

    renderRadio = ({ value, text }, index) => {
        const { input: { name }, type, translate, fullWidth } = this.props;        

        return (
            <FormGroup key={`radio.${index}`} className={css({ "col-md-12": fullWidth })} check>
                <Label for={name} check>
                    <Input id={name} name={name} type={type} value={value} />
                    {` ${translate(name, `text${index}`, text)}`}
                </Label>
            </FormGroup>
        );
    };
}


