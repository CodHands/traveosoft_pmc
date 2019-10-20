import React from 'react';
import Home from './containers/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PMChart from './components/PMChart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chart" component={PMChart}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
