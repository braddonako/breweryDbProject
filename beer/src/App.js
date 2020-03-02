import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>  
          <Route path="/" component={Home} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
