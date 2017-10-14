import React from 'react';
import PropTypes from 'prop-types';

//TODO add validations
export default class FormGroupRenderer extends React.PureComponent {
    static displayName = 'FormGroupRenderer';

    static propTypes = {
        uiFactory: PropTypes.object.isRequired,
        component: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired
    };

    render() {
        const { component, displayName, uiFactory, ...rest } = this.props;

        if (displayName !== 'FormGroup') {
            throw Error(`${[displayName]} is expected to be a 'FormGroup' when using <FormGroupRenderer />`);
        }

        return uiFactory[component](rest);
    }
}
