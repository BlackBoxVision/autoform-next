import React from 'react';

import { AutoForm, AutoFormField, AutoFormGroup, AutoFormSubmit, Bootstrap4 } from './autoform';

const createArr = (count, arr = []) => {
    for (let i = 1; i <= count; i++) arr.push({ value: i, text: i });

    return arr;
};

const translations = {
    es: {
        translation: {
            contactForm: {
                title: "Formulario de Contacto"
            },
            personalInformation: {
                title: "Información Personal"
            },
            location: {
                title: "Locación"
            },
            isMan: {
                label: "Es usted hombre?"
            },
            name: {
                label: "Nombre",
                placeholder: "nombre",
                helpText: "Aquí va tu nombre"
            },
            surname: {
                label: "Apellido",
                placeholder: "apellido",
                helpText: "Aquí va tu Apellido"
            },
            address: {
                label: "Dirección",
                placeholder: "dirección",
                helpText: "Aquí va la dirección en donde vives"
            },
            city: {
                label: "Ciudad",
                placeholder: "ciudad",
                helpText: "Aquí va la ciudad en donde resides"
            },
            comment: {
                label: "Comentarios",
                placeholder: "comentarios",
                helpText: "Aquí puedes poner algún comentario si quieres"
            },
            age: {
                label: "Edad",
                placeholder: "edad",
                helpText: "Selecciona tu edad de este combo"
            },
            submit: {
                label: "Enviar Formulario de Contacto"
            }
        }
    }
}

const contactSchema = [
    {
        name: 'awesome-group.0',
        component: 'Group',
        children: [
            {
                name: 'someInput.0',
                label: 'someInput',
                placeholder: 'Some Input',
                col: 12
            }
        ]
    },
    {
        name: 'awesome-group.1',
        component: 'Group',
        children: [
            {
                name: 'someInput.1',
                label: 'someInput',
                placeholder: 'Some Input',
                component: 'TextInput',
                col: 12
            }
        ]
    },
    {
        name: 'someInput.2',
        label: 'someInput',
        placeholder: 'Some Input',
        component: 'TextInput'
    }
];

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <br />
                <div className="card">
                    <div className="container">
                        <AutoForm
                            locale="es"
                            fallbackLocale="es"
                            form="contactForm"
                            title="Contact Form"
                            uiFactory={Bootstrap4}
                            onSubmit={this.handleSubmit}
                            translations={translations}
                        >
                            <AutoFormField name="isMan" label="Are you a Man?" component="CheckBox" />
                            <AutoFormGroup name="personalInformation">
                                <AutoFormField name="name" label="Name" col={5} helpText />
                                <AutoFormField name="surname" label="Surname" col={5} helpText />
                                <AutoFormField
                                    col={2}
                                    name="age"
                                    label="Age"
                                    component="Select"
                                    options={createArr(100)}
                                    helpText
                                />
                            </AutoFormGroup>
                            <AutoFormGroup name="location" component="Group">
                                <AutoFormField name="address" label="Address" col={7} helpText />
                                <AutoFormField name="city" label="City" col={5} helpText />
                            </AutoFormGroup>
                            <AutoFormField name="comment" label="Comment" component="TextArea" rows={4} helpText />
                            <AutoFormSubmit label="Submit Form!" fullWidth />
                            <br />
                            <br />
                        </AutoForm>
                    </div>
                </div>
                <br />
            </div>
        );
    }

    handleSubmit = values => alert(JSON.stringify(values));
}

/** 
<br />
<div className="card">
    <div className="container">
        <AutoForm
            form="contact"
            title="Contact Form"
            schema={contactSchema}
            uiFactory={Bootstrap4}
            onSubmit={this.handleSubmit}
        />
    </div>
</div>
<br />
**/