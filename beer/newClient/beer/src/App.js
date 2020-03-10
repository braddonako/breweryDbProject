import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Breweries from './components/BreweriesContainer/breweries'
import Beer from './components/BeerContainer/beer'
import About from './components/About/about';
import Header from './components/Header_Footer/HeaderComponent/header';
import Footer from './components/Header_Footer/Footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resources/CSS/styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/breweries' component={Breweries}/>
          <Route path='/beers' component={Beer}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
