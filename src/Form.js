import React from 'react';
import ReformContext from './ReformContext';

function Form({children, ...props}) {
  return (
    <ReformContext.Consumer>
      {({onSubmit}) => (
        <form onSubmit={onSubmit} {...props}>
          {children}
        </form>
      )}
    </ReformContext.Consumer>
  );
}

export default Form;
