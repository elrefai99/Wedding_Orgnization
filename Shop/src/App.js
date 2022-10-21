import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import Error from './components/Error/Error'
import Contact from './components/Contact/Contact'
import Collections from './components/Collections/Collections'
import Product from './components/Product/Product'
import Checkout from './components/Checkout/Checkout'
import Men from './components/Men/Men'
import Women from './components/Women/Women'






const App = () => {
  return (
    <div className="App">

     <Router>
       <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Error />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/collections' element={<Collections />} />
          <Route exact path='/' element={<Collections />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
        </Routes>
     </Router>

    </div>
  );
}

export default App;
