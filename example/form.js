import React from 'react';
import {ReformContext} from '../src';

export function SubmitButton() {
  return (
    <ReformContext.Consumer>
      {({isSubmitting}) => (
        <p>
          <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
        </p>
      )}
    </ReformContext.Consumer>
  );
}

function Field({component: Component = 'input', name, values, value, onChange, children, ...props}) {
  const fieldProps = {...props, name, onChange};
  if (value) {
    fieldProps.value = value;
    fieldProps.checked = values[name] === value;
  }
  else fieldProps.value = values[name];
  return (
    <Component {...fieldProps}>
      {children}
    </Component>
  );
}

export function FieldGroup({label, radioValues, ...props}) {
  return (
    <ReformContext.Consumer>
      {({values, errors, onChange}) => (
        <p>
          <label>
            {label}:&nbsp;
            {radioValues
              ? radioValues.map(radioValue => (
                <Field {...{...props, onChange, values, value: radioValue, key: radioValue}}/>
              ))
              : <Field {...{...props, onChange, values}}/>}
          </label>
          {errors[props.name] && <span>{errors[props.name]}</span>}
        </p>
      )}
    </ReformContext.Consumer>
  );
}
