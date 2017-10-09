import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
    static displayName = "Form";

    static propTypes = {
        children: PropTypes.any,
        inline: PropTypes.bool
    };

    static defaultProps = {
        inline: false
    };

    render() {
        const { children, inline, ...rest } = this.props;

        return (
            <form className={css({"form-inline": inline })} {...rest}>
                {children}
            </form>
        );
    }
}