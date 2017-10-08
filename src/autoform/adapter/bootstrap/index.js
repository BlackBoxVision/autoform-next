import React from 'react';

import TextInput from './components/input/TextInput';
import Button from './components/input/Button';

import Form from './components/form/Form';

export default {
    Form: props => <Form {...props}/>,
    FormInline: props => <Form {...props} inline />,
    TextInput: props => <TextInput {...props} />,
    Button: props => <Button {...props} />
};