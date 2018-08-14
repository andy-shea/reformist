import React, {Fragment} from 'react';
import FormUsingRenderProp from './FormUsingRenderProp';
import FormUsingContext from './FormUsingContext';

const styles = {
  border: '2px solid black',
  padding: '1em 2em',
  display: 'inline-block',
  minWidth: '400px'
};

function App() {
  return (
    <Fragment>
      <div style={styles}>
        <h2>Form created using render prop</h2>
        <FormUsingRenderProp/>
      </div>

      <div style={{...styles, marginLeft: '1em'}}>
        <h2>Form created using context</h2>
        <FormUsingContext/>
      </div>
    </Fragment>
  );
}

export default App;
