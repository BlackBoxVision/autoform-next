import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import TextInput from './Text';

export default class PasswordInput extends React.Component {
    static displayName = 'PasswordInput';

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
        type: 'password',
        readOnly: false,
        small: false,
        big: false
    };

    render() {
        return <TextInput {...this.props}/>;
    }
}
