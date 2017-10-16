import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

//TODO add conditional render component
//TODO extract helper-text and validation-feedback to helper components
export default class TextInput extends React.Component {
    static displayName = 'TextInput';

    static propTypes = {
        col: PropTypes.number,
        placeholder: PropTypes.string,
        helpText: PropTypes.any,
        readOnly: PropTypes.bool,
        big: PropTypes.bool,
        small: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.any,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'text',
        readOnly: false,
        big: false,
        small: false
    };

    render() {
        const {
            input: { name, ...inputProps },
            meta: { error, touched },
            label,
            type,
            children,
            big,
            small,
            readOnly,
            helpText,
            placeholder,
            translate,
            col
        } = this.props;

        const input = css({
            'form-control-lg': big,
            'form-control-sm': small,
            'is-invalid': error && touched,
            'is-valid': !error && touched
        });

        return (
            <FormGroup className={css({ [`col-md-${col}`]: !!col })}>
                <Label for={name}>
                    {translate(name, 'label', label)}
                </Label>
                <Input
                    placeholder={translate(name, 'placeholder', placeholder)}
                    valid={error && touched}
                    readOnly={readOnly}
                    className={input}
                    name={name}
                    type={type}
                    id={name}
                    {...inputProps}
                >
                    {children}
                </Input>
                {helpText && (
                    <FormText id={`${name}-help-text`} color="muted">
                        {translate(name, 'helpText', helpText)}
                    </FormText>
                )}
                <FormFeedback>
                    {error}
                </FormFeedback>
            </FormGroup>
        );
    }
}