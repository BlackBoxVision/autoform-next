import React from 'react';

import Select from './components/input/Select';
import Button from './components/input/Button';
import CheckBox from './components/input/CheckBox';
import TextArea from './components/input/TextArea';
import TextInput from './components/input/TextInput';

import Form from './components/form/Form';
import Group from './components/group/Group';

export default {
    Group: props => <Group {...props} />,
    Form: props => <Form {...props} />,
    FormInline: props => <Form {...props} inline />,
    TextInput: props => <TextInput {...props} />,
    TextArea: props => <TextArea {...props} />,
    CheckBox: props => <CheckBox {...props} />,
    Select: props => <Select {...props} />,
    Button: props => <Button {...props} />
};
