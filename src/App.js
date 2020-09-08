import React from 'react';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <Layout>
        <Calculator/>
      </Layout>
    </div>
  );
}

export default App;
