import React from 'react';

import { AutoForm, AutoFormField, AutoFormGroup, AutoFormSubmit, Bootstrap4 } from './autoform';

const createOptionsArray = (count, arr = []) => {
    for (let i = 1; i <= count; i++) arr.push({ value: i, text: i });

    return arr;
};

const contactSchema = [
    {
        name: "awesome-group.0",
        component: "Group",
        children: [
            {
                name: "someInput.0",
                label: "someInput",
                placeholder: "Some Input",
                component: "TextInput",
                col: 12
            }
        ]
    }, 
    {
        name: "awesome-group.1",
        component: "Group",
        children: [
            {
                name: "someInput.1",
                label: "someInput",
                placeholder: "Some Input",
                component: "TextInput",
                col: 12
            }
        ] 
    },
    {
      name: "someInput.2",
      label: "someInput",
      placeholder: "Some Input",
      component: "TextInput"
    }
]

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <br />
                <div className="card"> 
                    <div className="container">
                        <AutoForm form="some-form" title="Some Form" uiFactory={Bootstrap4} onSubmit={this.handleSubmit}>
                            <AutoFormField name="isMan" label="Are you a Man?" component="CheckBox" />
                            <AutoFormGroup name="Personal Information" component="Group">
                                <AutoFormField name="name" label="Name" component="TextInput" col={5}/>
                                <AutoFormField name="surname" label="Surname" component="TextInput" col={5}/>
                                <AutoFormField name="age" label="Age" component="Select" col={2} options={createOptionsArray(100)}/>
                            </AutoFormGroup>
                            <AutoFormGroup name="Location" component="Group">
                                <AutoFormField name="address" label="Address" component="TextInput" col={7}/>
                                <AutoFormField name="city" label="City" component="TextInput" col={5}/>
                            </AutoFormGroup>
                            <AutoFormField name="comment" label="Comment" component="TextArea" rows={4} />
                            <AutoFormSubmit label="¡Enviar Formulario!" type="submit" component="Button" />
                            <br />
                            <br />
                        </AutoForm>
                    </div>
                </div>
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
            </div>
        );
    }

    handleSubmit = values => alert(JSON.stringify(values));
}
