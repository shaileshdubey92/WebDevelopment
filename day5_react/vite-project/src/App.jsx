import React from 'react';
import Person from './Components/Person';
import Counter from './Components/Counter';
import Persondetail from './Components/Persondetail';
// import Adharcard from './Components/Adharcard';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import Use_Effect from './Components/Use_Effect';
import Fetch_Data from './Components/Fetch_Data';
import FormHandling from './FormHandling';
import Multiple_input_handling from './Multiple_input_handling';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import Home from './Router/Home';
import Home from './Router/Home';

import About from './Router/About';
import Career from './Router/Career';
import Teams from './Router/Teams';
import Contact from './Router/Contact';
// import Data from './Router/Product';
import Nav_bar from './Router/Nav_bar';
import DynamicRouter from './Router/DynamicRouter';
import product from './Components/Product';
import SearchItems from './Components/SearchItems';
import IndianGoverment from './Components/IndianGoverment';




const App = () => {

  const money = 1000;
  
  return (
    <>
    <Router>
      {/* <Nav_bar/> */}
      <IndianGoverment money={money}/>
      {/* <Routes> */}
        {/* <Route path={'/'} element={<Home />} /> */}
        {/* <Route path={'/about'} element={<About/>} />
        <Route path={'/career'} element={<Career/>} />
        <Route path={'/teams'} element={<Teams/>} />
        <Route path={'/contact'} element={<Contact/>} />
        <Route path={'/products'} element={<Product/>} />
        <Route path={'/products/:slug'} element={<DynamicRouter/>} />
        <Route path={'/products/search/:superman'} element={<SearchItems/>} /> */}

        {/* <Route path={'/product'} element={<Data/>} /> */}
      {/* <div> */}
       
        {/* <data/> */}
        
        {/* <Product product={product}/> */}
        {/* <Product /> */}
        {/* <Use_Effect/> */}
        {/* <Fetch_Data/> */}
       {/* <FormHandling/> */}
       {/* <Multiple_input_handling/> */}

      {/* </div> */}
      {/* </Routes> */}
      </Router>
    </>
  );
};

export default App;