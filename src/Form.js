import React from 'react';
import ReformContext from './ReformContext';

function Form({children, component: Component = 'form', ...props}) {
  return (
    <ReformContext.Consumer>
      {({onSubmit}) => (
        <Component onSubmit={onSubmit} {...props}>
          {children}
        </Component>
      )}
    </ReformContext.Consumer>
  );
}

export default Form;
