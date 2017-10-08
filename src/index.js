import React from 'react';
import ReactDOM from 'react-dom';

import AutoForm from './components/AutoForm';
import AutoFormGroup from './components/AutoFormGroup';
import AutoFormSubmit from './components/AutoFormSubmit';
import AutoFormElement from './components/AutoFormElement';

const uiAdapter = {
    "TextInput": ({ children, ...rest }) => (
        <div className="form-group">
            <label htmlFor={rest.name}>
                {rest.label}
            </label>
            <input className="form-control" {...rest}>
                {children}
            </input>
        </div>
    ),
    "Button": ({ label, ...rest }) => (
        <button className="btn btn-primary" {...rest}>
            {label}
        </button>
    )
};

const App = () => (
    <div className="container">
        <AutoForm
            formName="someForm"
            uiAdapter={uiAdapter}
            onSubmit={event => {
                alert("submitting!");
                event.preventDefault();
            }}
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
);

ReactDOM.render(<App />, document.getElementById('root'));
