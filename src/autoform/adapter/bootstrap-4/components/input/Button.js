import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    static displayName = 'Button';

    static propTypes = {
        label: PropTypes.string.isRequired
    };

    render() {
        const { label, isDebugEnabled, formProps, uiFactory, translate, fullWidth, ...rest } = this.props;

        return (
            <div className="form-group">
                <button className={css("btn btn-primary", { "col-md-12": fullWidth })} {...rest}>
                    {translate(`submit.label`) || label}
                </button>
            </div>
        );
    }
}
