import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

//TODO multiple is not working yet, review how to fix it
export default class Select extends React.Component {
    static displayName = 'Select';

    static propTypes = {
        col: PropTypes.number,
        placeholder: PropTypes.string,
        helpText: PropTypes.any,
        readOnly: PropTypes.bool,
        big: PropTypes.bool,
        small: PropTypes.bool,
        multiple: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        options: PropTypes.array,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'select',
        readOnly: false,
        multiple: false,
        big: false,
        small: false
    };

    render() {
        const {
            input: { name, ...inputProps },
            meta: { error, touched },
            label,
            options,
            multiple,
            big,
            small,
            readOnly,
            helpText,
            placeholder,
            col,
            translate,
            type
        } = this.props;

        const input = css('form-control', {
            'form-control-lg': big,
            'form-control-sm': small,
            'is-invalid': error && touched,
            'is-valid': !error && touched
        });

        return (
            <FormGroup className={css({ [`col-md-${col}`]: !!col })}>
                <Label className="col-form-label" htmlFor={name}>
                    {translate(name, 'label', label)}   
                </Label>
                <Input
                    placeholder={translate(name, 'placeholder', placeholder)}
                    valid={error && touched}
                    multiple={multiple}
                    readOnly={readOnly}
                    className={input}
                    type={type}
                    name={name}
                    id={name}
                    {...inputProps}
                >
                    {options.map(this.renderOptions)}
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

    renderOptions = ({ value, text }, index) => (
        <option key={`option.${index}`} value={value}>
            {text}
        </option>
    );
}
