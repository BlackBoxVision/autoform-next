import React from 'react';

import Select from "./components/input/Select";
import Button from './components/input/Button';
import TextInput from './components/input/TextInput';

import Form from './components/form/Form';

export default {
    Form: props => <Form {...props}/>,
    FormInline: props => <Form {...props} inline />,
    TextInput: props => <TextInput {...props} />,
    Select: props => <Select {...props} />,
    Button: props => <Button {...props} />
};