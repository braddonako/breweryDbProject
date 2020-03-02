import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about'
import Header from './components/HeaderCompnent/header'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>  
          <Route path="/" component={Home} exact/>
          <Route path='/about' component={About} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
