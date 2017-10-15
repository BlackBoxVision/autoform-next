import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends React.Component {
    static displayName = 'CheckBox';

    static propTypes = {
        type: PropTypes.string,
        label: PropTypes.string,
        input: PropTypes.object,
        meta: PropTypes.object
    };

    static defaultProps = {
        type: 'checkbox'
    };

    render() {
        const { input: { name, ...inputProps }, label, type, translate } = this.props;

        return (
            <div className="form-group">
                <label className="custom-control custom-checkbox" htmlFor={name}>
                    <input className="custom-control-input" id={name} name={name} type={type} {...inputProps} />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">
                        {translate(`${name}.label`) || label}
                    </span>
                </label>
            </div>
        );
    }
}
