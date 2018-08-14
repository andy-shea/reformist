import React from 'react';
import Reform, {Form} from '../src';
import {initialState, submitForm} from './common';
import {FieldGroup, SubmitButton} from './form';

function FormUsingContext() {
  return (
    <Reform initialState={initialState()} submitForm={submitForm}>
      <Form>
        <FieldGroup label="Text" name="text" type="text"/>
        <FieldGroup label="Radio" name="radio" type="radio" radioValues={['radio1', 'radio2', 'radio3']}/>
        <FieldGroup label="Checkbox" name="checkbox" type="checkbox" value="checkbox"/>
        <FieldGroup label="Textarea" name="textarea" component="textarea"/>
        <FieldGroup label="Select" name="select" component="select">
          <option value="select1">select1</option>
          <option value="select2">select2</option>
          <option value="select3">select3</option>
        </FieldGroup>
        <FieldGroup label="Test error state?" name="shouldError" type="checkbox" value="error"/>
        <SubmitButton/>
      </Form>
    </Reform>
  );
}

export default FormUsingContext;
