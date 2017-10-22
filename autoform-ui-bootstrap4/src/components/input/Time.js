import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import TextInput from './Text';

export default class TimeInput extends React.Component {
    static displayName = 'TimeInput';

    static propTypes = {
        col: PropTypes.number,
        children: PropTypes.any,
        helpText: PropTypes.any,
        big: PropTypes.bool,
        small: PropTypes.bool,
        readOnly: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        meta: PropTypes.object,
        input: PropTypes.object
    };

    static defaultProps = {
        type: 'time',
        readOnly: false,
        small: false,
        big: false
    };

    render() {
        return <TextInput {...this.props} />;
    }
}
