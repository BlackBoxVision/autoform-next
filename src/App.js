import React from 'react';

import { AutoForm, AutoFormField, AutoFormGroup, AutoFormSubmit, Bootstrap4 } from './autoform';
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
                        <AutoForm
                            form="contactForm"
                            title="Contact Form"
                            uiFactory={Bootstrap4}
                            locale={locale}
                            fallbackLocale={locale}
                            translations={translations}
                            onSubmit={this.handleSubmit}
                        >
                            <AutoFormGroup name="gender">
                                <AutoFormField name="isMan" label="Are you a Man?" component="CheckBox" fullWidth />
                                <AutoFormField name="isWoman" label="Are you a Woman?" component="CheckBox" fullWidth />
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
                                <AutoFormField
                                    col={2}
                                    name="number"
                                    label="Number"
                                    component="Radio"
                                    options={createArr(5)}
                                    helpText="This is some help text"
                                />
                            </AutoFormGroup>
                            <AutoFormGroup name="location">
                                <AutoFormField type="number" name="address" label="Address" col={7} helpText />
                                <AutoFormField name="city" label="City" col={5} helpText />
                            </AutoFormGroup>
                            <AutoFormGroup name="additional">
                                <AutoFormField name="comment" label="Comment" component="TextArea" rows={4} col={12} helpText />
                            </AutoFormGroup>
                            <AutoFormSubmit label="Submit Form!" fullWidth />
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