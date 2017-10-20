import React from 'react';
import PropTypes from 'prop-types';

import FormDataAccessor from '../../provider/FormDataAccessor';

//TODO add validations
export default class FormGroupRenderer extends React.PureComponent {
    static displayName = 'FormGroupRenderer';

    static propTypes = {
        component: PropTypes.string.isRequired,
        uiFactory: PropTypes.object.isRequired,
        displayName: PropTypes.string.isRequired
    };

    static defaultProps = {
        component: 'Group'
    };

    render() {
        const { component, displayName, uiFactory, ...rest } = this.props;

        if (displayName !== 'FormGroup') {
            throw Error(`${[displayName]} is expected to be a 'FormGroup' when using <FormGroupRenderer />`);
        }

        return <FormDataAccessor render={this.renderComponent(rest)} />;
    }

    renderComponent = rest => props => this.props.uiFactory[this.props.component]({ ...rest, ...props });
}
