import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Header from './components/HeaderCompnent/header';
// import Breweries from './components/Breweries/breweries';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resources/style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>  
          <Route path="/" component={Home} exact/>
          <Route path='/about' component={About} exact/>
          {/* <Route path='/breweries' component={Breweries} exact/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
