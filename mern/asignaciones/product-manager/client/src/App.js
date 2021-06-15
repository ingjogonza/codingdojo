import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import Home from './views/Home'
import Products from './views/Products';
import Product from './views/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailProduct from './views/DetailProduct';

function App() {
  
  return (
    <div className="container">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/product/">
            <Product/>
        </Route>
        <Route exact path="/product/:id">
            <DetailProduct/>
        </Route>
        <Route exact path="/product/edit/:id">
            <Product/>
        </Route>
        <Route exact path="/products">
            <Products/>
        </Route>
        </Switch>

      </Router>
    
    </div>
  );
}

export default App;
