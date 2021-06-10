import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import Products from './views/Products';

function App() {
  const [productsList, setProductsList] = useState([])
  return (
    <div className="App">
    <Products productsList={productsList} setProductsList={setProductsList}  />
    </div>
  );
}

export default App;
