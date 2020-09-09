import React from 'react';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';
import History from './containers/History/History';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Calculator/> */}
        <History/>
      </Layout>
    </div>
  );
}

export default App;
