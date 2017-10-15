import React from 'react';

import { AutoForm, AutoFormField, AutoFormGroup, AutoFormSubmit, Bootstrap4 } from './autoform';
import translations from './messages';
import createArr from './utils';

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
                            translations={translations}
                            onSubmit={this.handleSubmit}
                        >
                            <AutoFormGroup name="gender">
                                <AutoFormField name="isMan" label="Are you a Man?" component="CheckBox" />
                                <AutoFormField name="isWoman" label="Are you a Woman?" component="CheckBox" />
                            </AutoFormGroup>
                            <AutoFormGroup name="personal">
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
                            <AutoFormGroup name="location">
                                <AutoFormField name="address" label="Address" col={7} helpText />
                                <AutoFormField name="city" label="City" col={5} helpText />
                            </AutoFormGroup>
                            <AutoFormGroup name="additional">
                                <AutoFormField name="comment" label="Comment" component="TextArea" rows={4} col={12} helpText />
                            </AutoFormGroup>
                            <AutoFormSubmit label="Submit Form!" />
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