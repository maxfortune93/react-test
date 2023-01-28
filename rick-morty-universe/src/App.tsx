import { ReactElement } from 'react';
import { Button } from '@material-ui/core';

function App(): ReactElement {
  return (
    <div>
      <h1>Ta rodando?</h1>
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
    </div>
  );
}

export default App;
