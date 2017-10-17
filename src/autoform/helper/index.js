import i18next from 'i18next';
import SchemaCompat from '../compat';

export const Component = {
    GROUP: 'FormGroup',
    FIELD: 'FormField',
    SUBMIT: 'FormSubmit',
    FIELD_ARRAY: 'FormFieldArray',
    FIELD_ENTITY: 'FormFieldEntity'
};

export default class FormHelper {
    static childrenToArray(children) {
        if (Array.isArray(children)) {
            return children;
        }

        return [children];
    }

    static _renderChildren(children, uiFactory, renderGroup, renderField) {
        return FormHelper.childrenToArray(children).map((element, index) => {
            const { props, type } = element;

            if (type.hasOwnProperty('displayName')) {
                switch (type.displayName) {
                    case Component.GROUP:
                        const groupProps = {
                            ...props,
                            uiFactory,
                            displayName: type.displayName,
                            children: FormHelper._renderChildren(
                                props.children,
                                uiFactory,
                                renderGroup,
                                renderField
                            )
                        };

                        return renderGroup(groupProps, index);
                    case Component.FIELD:
                    case Component.SUBMIT:
                        const fieldProps = {
                            ...props,
                            uiFactory,
                            displayName: type.displayName
                        };

                        return renderField(fieldProps, index);
                    default:
                        return element;
                }
            }

            return element;
        });
    }

    static getChildren({ schema, children, uiFactory }, renderGroup, renderField) {
        const newChildren = schema ? SchemaCompat.asReactChildren(schema) : children;

        return FormHelper._renderChildren(newChildren, uiFactory, renderGroup, renderField);
    }

    static getI18n({ locale, fallbackLocale, translations }) {
        return i18next.init({
            lng: locale,
            fallbackLng: fallbackLocale,
            resources: translations
        });
    }

    static getForm({ uiFactory, component }) {
        return uiFactory[component];
    }

    static getReduxFormProps(props) {
        const reduxFormProps = [
            'initialValues',
            'form',
            'formKey',
            'onSubmit',
            'onSubmitFail',
            'handleSubmit',
            'onSubmitSuccess',
            'reset',
            'readonly',
            'touchOnBlur',
            'touchOnChange',
            'destroyOnUnmount',
            'alwaysAsyncValidate',
            'returnRejectedSubmitPromise',
            'overwriteOnInitialValuesChange',
            'pristine',
            'submitting'
        ];

        const formReducer = (accum, reduxFormProp) => {
            if (props.hasOwnProperty(reduxFormProp) && props[reduxFormProp] !== undefined) {
                accum[reduxFormProp] = props[reduxFormProp];
            }

            return accum;
        };

        return reduxFormProps.reduce(formReducer, {});
    }
}
