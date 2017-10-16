import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { Button, FormGroup } from 'reactstrap';

export default class SubmitButton extends React.Component {
    static displayName = 'Button';

    static propTypes = {
        label: PropTypes.string.isRequired
    };

    render() {
        const { label, isDebugEnabled, formProps, uiFactory, translate, fullWidth, ...rest } = this.props;

        return (
            <FormGroup>
                <Button className={css({ "col-md-12": fullWidth })} color="primary" type="submit" {...rest}>
                    {translate('submit', 'label', label)}
                </Button>
            </FormGroup>
        );
    }
}
