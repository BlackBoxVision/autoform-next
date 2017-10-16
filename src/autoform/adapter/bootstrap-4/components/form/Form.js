import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import { Form as BoostrapForm } from 'reactstrap'; 

export default class Form extends React.Component {
    static displayName = 'Form';

    static propTypes = {
        children: PropTypes.any,
        inline: PropTypes.bool,
        title: PropTypes.string
    };

    static defaultProps = {
        inline: false
    };

    render() {
        const { children, inline, title, translate, name, isDebugEnabled, uiFactory, formProps, ...rest } = this.props;

        return (
            <BoostrapForm className={css({ 'form-inline': inline })} {...rest}>
                <br />
                <h3>{translate(name, 'title', title)}</h3>
                <br />
                {children}
            </BoostrapForm>
        );
    }
}
