import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

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
        const { children, inline, title, ...rest } = this.props;

        return (
            <form className={css({ 'form-inline': inline })} {...rest}>
                {title && <legend>{title}</legend>}
                {children}
            </form>
        );
    }
}
