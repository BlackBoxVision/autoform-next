import React from 'react';

import AutoForm from './autoform/components/AutoForm';

import AutoFormField from './autoform/components/form/FormField';
import AutoFormGroup from './autoform/components/form/FormGroup';
import AutoFormSubmit from './autoform/components/form/FormSubmit';

import bootstrap4Adapter from './autoform/adapter/bootstrap-4';

const createOptionsArray = (count, arr = []) => {
    for (let i = 1; i <= count; i++) arr.push({ value: i, text: i });

    return arr;
};

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <AutoForm
                    form="someForm"
                    component="Form"
                    title="Some Form"
                    onSubmit={this.handleSubmit}
                    uiAdapter={bootstrap4Adapter}
                >
                    <AutoFormField name="isMan" label="Are you a Man?" component="CheckBox" />
                    <AutoFormGroup name="Personal Information" component="Group">
                        <AutoFormField name="name" label="Name" component="TextInput" col={5}/>
                        <AutoFormField name="surname" label="Surname" component="TextInput" col={5}/>
                        <AutoFormField name="age" label="Age" component="Select" options={createOptionsArray(100)} col={2}/>
                    </AutoFormGroup>
                    <AutoFormGroup name="Location" component="Group">
                        <AutoFormField name="address" label="Address" component="TextInput" col={7}/>
                        <AutoFormField name="city" label="City" component="TextInput" col={5}/>
                    </AutoFormGroup>
                    <AutoFormField name="comment" label="Comment" component="TextArea" rows={4} />
                    <AutoFormSubmit label="¡Enviar Formulario!" type="submit" component="Button" />
                </AutoForm>
            </div>
        );
    }

    handleSubmit = values => alert(JSON.stringify(values));
}
