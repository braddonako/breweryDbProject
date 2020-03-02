import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>  
          <Route path="/" component={Home} exact/>
          <Route path='/about' component={About} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
