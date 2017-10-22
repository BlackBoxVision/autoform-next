import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import TextInput from './Text';

export default class FileInput extends React.Component {
    static displayName = 'FileInput';

    static propTypes = {
        col: PropTypes.number,
        children: PropTypes.any,
        helpText: PropTypes.any,
        big: PropTypes.bool,
        small: PropTypes.bool,
        readOnly: PropTypes.bool,
        multiple: PropTypes.bool,
        type: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        meta: PropTypes.object,
        input: PropTypes.object
    };

    static defaultProps = {
        type: 'file',
        multiple: false,
        readOnly: false,
        small: false,
        big: false
    };

    render() {
        const { input: { value, ...newInput }, ...rest } = this.props;
        const { translate, t, uiFactory, isDebugEnabled, reduxFormProps, ...newProps } = rest;

        return <TextInput input={newInput} {...newProps} />;
    }
}
