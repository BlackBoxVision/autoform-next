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
                    <AutoFormGroup name="first-group">
                        <AutoFormField name="isMan" label="Are you a Man?" component="CheckBox" />
                        <AutoFormField name="name" label="Name" type="text" component="TextInput" />
                        <AutoFormField name="surname" label="Surname" type="text" component="TextInput" />
                        <AutoFormField
                            name="age"
                            label="Age"
                            type="text"
                            component="Select"
                            options={createOptionsArray(100)}
                        />
                    </AutoFormGroup>
                    <AutoFormField name="address" label="Address" type="text" component="TextInput" />
                    <AutoFormField name="city" label="City" type="text" component="TextInput" />
                    <AutoFormSubmit label="¡Enviar Formulario!" type="submit" component="Button" />
                </AutoForm>
            </div>
        );
    }

    handleSubmit = values => alert(JSON.stringify(values));
}
