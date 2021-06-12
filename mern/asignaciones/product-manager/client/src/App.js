import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import Products from './views/Products';
import Product from './views/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [productsList, setProductsList] = useState([])
  return (
    <div className="container">
      <Router>
        <Switch>
        <Route exact path="/">
            <Products productsList={productsList} setProductsList={setProductsList}  />
        </Route>
        <Route exact path="/product/:id">
            <Product/>
        </Route>
        </Switch>

      </Router>
    
    </div>
  );
}

export default App;
