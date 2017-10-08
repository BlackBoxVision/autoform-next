import React from 'react';

import AutoForm from './components/AutoForm';
import AutoFormGroup from './components/AutoFormGroup';
import AutoFormSubmit from './components/AutoFormSubmit';
import AutoFormElement from './components/AutoFormElement';

import adapter from './adapter';

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <AutoForm
                    element="Form"
                    formName="someForm"
                    uiAdapter={adapter}
                    onSubmit={this.handleSubmit}
                >
                    <AutoFormGroup name="first-group">
                        <AutoFormElement
                            name="name"
                            label="Name"
                            type="text"
                            element="TextInput"
                        />
                        <AutoFormElement
                            name="surname"
                            label="Surname"
                            type="text"
                            element="TextInput"
                        />
                        <AutoFormElement
                            name="age"
                            label="Age"
                            type="text"
                            element="TextInput"
                        />
                    </AutoFormGroup>
                    <AutoFormElement
                        name="address"
                        label="Address"
                        type="text"
                        element="TextInput"
                    />
                    <AutoFormElement
                        name="city"
                        label="City"
                        type="text"
                        element="TextInput"
                    />
                    <AutoFormSubmit
                        label="¡Enviar Formulario!"
                        type="submit"
                        element="Button"
                    />
                </AutoForm>
            </div>
        )
    }

    handleSubmit = event => {
        alert("submitting!");
        event.preventDefault();
    };
}