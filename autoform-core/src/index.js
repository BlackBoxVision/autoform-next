import AutoForm from './components/AutoForm';
import AutoFormField from './components/form/FormField';
import AutoFormGroup from './components/form/FormGroup';
import AutoFormSubmit from './components/form/FormSubmit';
import AutoFormFieldArray from './components/form/FormFieldArray';
import AutoFormFieldEntity from './components/form/FormFieldEntity';

export default {
    AutoForm: props => <AutoForm {...props} />,
    AutoFormField: props => <AutoFormField {...props} />,
    AutoFormGroup: props => <AutoFormGroup {...props} />,
    AutoFormSubmit: props => <AutoFormSubmit {...props} />,
    AutoFormFieldArray: props => <AutoFormFieldArray {...props} />,
    AutoFormFieldEntity: props => <AutoFormFieldEntity {...props} />
};
