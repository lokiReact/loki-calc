import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Calculator from './containers/Calculator/Calculator';
import History from './containers/History/History';

function App() {
  return (
    <div className="App">
      <Layout>
          <Switch>
            <Route path='/history' component={History} />
            <Route path='/' exact component={Calculator} />
            <Redirect to='/' />
          </Switch>        
      </Layout>
    </div>
  );
}

export default App;
