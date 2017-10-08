import React from 'react';
import ReactDOM from 'react-dom';

import AutoForm from './components/AutoForm';
import AutoFormGroup from './components/AutoFormGroup';
import AutoFormElement from './components/AutoFormElement';

const App = () => (
    <AutoForm name="someForm" onSubmit={formData => JSON.stringify(formData)}>
      <AutoFormGroup name="first-group">
        <AutoFormElement 
          name="name" 
          element="textInput"
          className="text-input" 
        />
        <AutoFormElement 
          name="surname" 
          element="textInput" 
          className="checkbox-input"
        />
        <AutoFormElement 
          name="age" 
          element="textInput" 
          className="text-input" 
        />
      </AutoFormGroup>
      <AutoFormElement 
        name="address" 
        element="textInput" 
        className="text-input" 
      />
      <AutoFormElement 
        name="city" 
        element="textInput" 
        className="text-input" 
      />
    </AutoForm>
);

ReactDOM.render(<App />, document.getElementById('root'));
