import React from 'react';
import Reform from '../src';
import {initialState, submitForm} from './common';

function Form() {
  return (
    <Reform initialState={initialState()} submitForm={submitForm}>
      {({errors, isSubmitting, values, onSubmit, onChange}) => (
        <form onSubmit={onSubmit}>
          <p>
            <label>
              Text:&nbsp;
              <input type="text" name="text" value={values.text} onChange={onChange}/>
            </label>
            {errors.text && <span>{errors.text}</span>}
          </p>
          <p>
            <label>
              Radio:&nbsp;
              <input name="radio" type="radio" value="radio1" checked={values.radio === 'radio1'} onChange={onChange}/>
              <input name="radio" type="radio" value="radio2" checked={values.radio === 'radio2'} onChange={onChange}/>
              <input name="radio" type="radio" value="radio3" checked={values.radio === 'radio3'} onChange={onChange}/>
            </label>
          </p>
          <p>
            <label>
              Checkbox:&nbsp;
              <input name="checkbox" type="checkbox" value="checkbox" checked={values.checkbox === 'checkbox'} onChange={onChange}/>
            </label>
          </p>
          <p>
            <label>
              Textarea:&nbsp;
              <textarea name="textarea" value={values.textarea} onChange={onChange}/>
            </label>
          </p>
          <p>
            <label>
              Select:&nbsp;
              <select name="select" value={values.select} onChange={onChange}>
                <option value="select1">select1</option>
                <option value="select2">select2</option>
                <option value="select3">select3</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Test error state?&nbsp;
              <input name="shouldError" type="checkbox" value="error" checked={values.shouldError === 'error'} onChange={onChange}/>
            </label>
          </p>
          <p>
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
          </p>
        </form>
      )}
    </Reform>
  );
}

export default Form;
