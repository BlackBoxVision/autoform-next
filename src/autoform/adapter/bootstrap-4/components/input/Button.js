import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static displayName = 'Button';

    static propTypes = {
        label: PropTypes.string.isRequired
    };

    render() {
        const { label, isDebugEnabled, formProps, uiFactory, translate, ...rest } = this.props;

        return (
            <button className="btn btn-primary" {...rest}>
                {label}
            </button>
        );
    }
}
