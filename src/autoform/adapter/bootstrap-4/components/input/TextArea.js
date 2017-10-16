import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

export default class TextArea extends React.Component {
    static displayName = 'TextArea';

    static propTypes = {
        col: PropTypes.number,
        placeholder: PropTypes.string,
        rows: PropTypes.number,
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
        type: 'textarea',
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
            rows,
            placeholder,
            col,
            translate
        } = this.props;

        const input = css({
            'form-control-lg': big,
            'form-control-sm': small,
            'is-invalid': error && touched,
            'is-valid': !error && touched,
            [`col-md-${col}`]: !!col
        });

        return (
            <FormGroup className={css({ [`col-md-${col}`]: !!col })}>
                <Label className="col-form-label" for={name}>
                    {translate(name, 'label', label)} 
                </Label>
                <Input
                    placeholder={translate(name, 'placeholder', placeholder)}
                    valid={error && touched}
                    readOnly={readOnly}
                    className={input}
                    name={name}
                    rows={rows}
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
