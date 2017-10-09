import React from 'react';
import PropTypes from 'prop-types';

export default function withFormData(mapFormDataToProps) {
    return WrappedComponent =>
        class WithFormData extends React.Component {
            static contextTypes = {
                formProps: PropTypes.object.isRequired,
                uiAdapter: PropTypes.object.isRequired
            };

            constructor(props, context) {
                super(props, context);
            }

            render() {
                return <WrappedComponent {...this.getNewProps()} />;
            }

            getNewProps = () => {
                const { formProps, uiAdapter } = this.context;
                const newFormProps = mapFormDataToProps ? mapFormDataToProps(formProps) : formProps;

                return {
                    ...WrappedComponent.props,
                    ...newFormProps,
                    uiAdapter
                };
            };
        };
}
