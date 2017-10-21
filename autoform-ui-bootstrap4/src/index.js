import React from 'react';
//TODO specify in README.md to add boostrap.css
//import 'bootstrap/dist/css/bootstrap.css';

import Form from './components/form/Form';
import Group from './components/group/Group';

import Radio from './components/input/Radio';
import UrlInput from './components/input/Url';
import Select from './components/input/Select';
import Button from './components/input/Button';
import FileInput from './components/input/File';
import TextInput from './components/input/Text';
import DateInput from './components/input/Date';
import TimeInput from './components/input/Time';
import EmailInput from './components/input/Email';
import ColorInput from './components/input/Color';
import CheckBox from './components/input/CheckBox';
import TextArea from './components/input/TextArea';
import SearchInput from './components/input/Search';
import NumberInput from './components/input/Number';
import PasswordInput from './components/input/Password';
import DateTimeInput from './components/input/DateTime';

export default {
    Group: props => <Group {...props} />,
    Form: props => <Form {...props} />,
    FileInput: props => <FileInput {...props} />,
    DateInput: props => <DateInput {...props} />,
    TimeInput: props => <TimeInput {...props} />,
    ColorInput: props => <ColorInput {...props} />,
    SearchInput: props => <SearchInput {...props} />,
    DateTimeInput: props => <DateTimeInput {...props} />,
    PasswordInput: props => <PasswordInput {...props} />,
    NumberInput: props => <NumberInput {...props} />,
    FormInline: props => <Form {...props} inline />,
    EmailInput: props => <EmailInput {...props} />,
    TextInput: props => <TextInput {...props} />,
    UrlInput: props => <UrlInput {...props} />,
    TextArea: props => <TextArea {...props} />,
    CheckBox: props => <CheckBox {...props} />,
    Select: props => <Select {...props} />,
    Button: props => <Button {...props} />,
    Radio: props => <Radio {...props} />
};
