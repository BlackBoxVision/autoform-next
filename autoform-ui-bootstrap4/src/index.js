import React from 'react';

//TODO specify in README.md to add boostrap.css
//import 'bootstrap/dist/css/bootstrap.css';

import Form from './components/form/Form';
import Group from './components/group/Group';

import Radio from './components/input/Radio';
import Select from './components/input/Select';
import Button from './components/input/Button';
import FileInput from './components/input/File';
import TextInput from './components/input/Text';
import CheckBox from './components/input/CheckBox';

export default {
    Form: props => <Form {...props} />,
    Group: props => <Group {...props} />,
    Radio: props => <Radio {...props} />,
    Select: props => <Select {...props} />,
    Button: props => <Button {...props} />,
    CheckBox: props => <CheckBox {...props} />,
    TextInput: props => <TextInput {...props} />,
    FileInput: props => <FileInput {...props} />,
    FormInline: props => <Form {...props} inline />,
    UrlInput: props => <TextInput type="url" {...props} />,
    DateInput: props => <TextInput type="date" {...props} />,
    TimeInput: props => <TextInput type="time" {...props} />,
    EmailInput: props => <TextInput type="email" {...props} />,
    ColorInput: props => <TextInput type="color" {...props} />,
    TextArea: props => <TextInput type="textarea" {...props} />,
    SearchInput: props => <TextInput type="search" {...props} />,
    NumberInput: props => <TextInput type="number" {...props} />,
    DateTimeInput: props => <TextInput type="datetime" {...props} />,
    PasswordInput: props => <TextInput type="password" {...props} />
};
