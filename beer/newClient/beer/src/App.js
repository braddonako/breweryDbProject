import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Breweries from './components/Breweries/breweries'
import About from './components/About/about';
import Header from './components/HeaderComponent/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/breweries' component={Breweries}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
