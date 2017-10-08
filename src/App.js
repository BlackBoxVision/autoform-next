import React from 'react';

import AutoForm from './autoform/components/AutoForm';
import AutoFormField from './autoform/components/form/FormField';
import AutoFormGroup from './autoform/components/form/FormGroup';
import AutoFormSubmit from './autoform/components/form/FormSubmit';

import bootstrapAdapter from './autoform/adapter/bootstrap';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <AutoForm
                    form="someForm"
                    component="Form"
                    uiAdapter={bootstrapAdapter}
                    onSubmit={this.handleSubmit}
                >
                    <AutoFormGroup name="first-group">
                        <AutoFormField
                            name="name"
                            label="Name"
                            type="text"
                            component="TextInput"
                        />
                        <AutoFormField
                            name="surname"
                            label="Surname"
                            type="text"
                            component="TextInput"
                        />
                        <AutoFormField
                            name="age"
                            label="Age"
                            type="text"
                            component="TextInput"
                        />
                    </AutoFormGroup>
                    <AutoFormField
                        name="address"
                        label="Address"
                        type="text"
                        component="TextInput"
                    />
                    <AutoFormField
                        name="city"
                        label="City"
                        type="text"
                        component="TextInput"
                    />
                    <AutoFormSubmit
                        label="¡Enviar Formulario!"
                        type="submit"
                        component="Button"
                    />
                </AutoForm>
            </div>
        )
    }

    handleSubmit = values => alert(JSON.stringify(values));
}