import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Core from 'autoform-core';
import Bootstrap4 from 'autoform-ui-bootstrap4';

import translations from './messages';
import createArr from './utils';

const locales = [{ text: { es: "Español", en: "Spanish" }, value: "es" }, { text: { es: "Inglés", en: "English" } , value: "en" }];

export default class App extends React.Component {
    state = {
        locale: "es"
    };

    onChange = event => this.setState({
        locale: event.target.value
    });

    render() {
        const { locale } = this.state;
        const label = {
            en: "Choose a language",
            es: "Selecciona un lenguaje"
        }

        console.info("AutoForm Core", Core);
        console.info("AutoForm Bootstrap 4", Bootstrap4);
    
        return (
            <div className="container">
                <br />
                <div className="card">
                    <br />
                    <div className="container">
                        <label className="col-form-label">{label[locale]}</label>
                        <select className="form-control col-md-12" value={locale} onChange={this.onChange}>
                            {locales.map(({ text, value }) => <option key={value} value={value}>{text[this.state.locale]}</option>)}
                        </select>
                    </div>
                    <br />
                </div>
                <br />
                <div className="card">
                    <div className="container">
                        <Core.AutoForm
                            form="contactForm"
                            title="Contact Form"
                            uiFactory={Bootstrap4}
                            locale={locale}
                            fallbackLocale={locale}
                            translations={translations}
                            onSubmit={this.handleSubmit}
                        >
                            <Core.AutoFormGroup name="gender">
                                <Core.AutoFormField name="isMan" label="Are you a Man?" component="CheckBox" fullWidth />
                                <Core.AutoFormField name="isWoman" label="Are you a Woman?" component="CheckBox" fullWidth />
                            </Core.AutoFormGroup>
                            <Core.AutoFormGroup name="personal">
                                <Core.AutoFormField name="name" label="Name" col={5} helpText />
                                <Core.AutoFormField name="surname" label="Surname" col={5} helpText />
                                <Core.AutoFormField
                                    col={2}
                                    name="age"
                                    label="Age"
                                    component="Select"
                                    options={createArr(100)}
                                    helpText
                                />
                                <Core.AutoFormField
                                    col={2}
                                    name="number"
                                    label="Number"
                                    component="Radio"
                                    options={createArr(5)}
                                    helpText="This is some help text"
                                />
                            </Core.AutoFormGroup>
                            <Core.AutoFormGroup name="location">
                                <Core.AutoFormField name="address" label="Address" col={7} helpText />
                                <Core.AutoFormField name="city" label="City" col={5} helpText />
                            </Core.AutoFormGroup>
                            <Core.AutoFormGroup name="additional">
                                <Core.AutoFormField name="comment" label="Comment" component="TextArea" rows={4} col={12} helpText />
                            </Core.AutoFormGroup>
                            <Core.AutoFormSubmit label="Submit Form!" fullWidth />
                            <br />
                        </Core.AutoForm>
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