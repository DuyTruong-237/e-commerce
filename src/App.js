import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home'
import Login from './Screens/Login/Login'
import Profile from './Screens/Profile/Profile';
import OwnOrder from './Screens/OwnOrder/OwnOrder';
import ProductItem from './Components/Product/ProductItem';
import ItemProducts from './Components/ItemProducts/ItemProducts';
import ActiveCart from './Components/Cart/ActiveCart'
import Shop from './Screens/Shop/Shop';
import BuyItem from './Screens/InfoProduct/InfoProduct'
import DailyDiscover from './Screens/DailyDiscover/DailyDiscover';
import SearchResult from './Screens/SearchResult/SearchResult';
import ShoppingCart from './Screens/ShoppingCart/ShoppingCart';
import AddProduct from './Components/AddNewProduct/AddNewProduct';
import Checkout from './Screens/Checkout/Checkout';
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/order" element={<OwnOrder />}/>
          <Route path="/cart" element={<ShoppingCart />}/>
          <Route path="/inforproduct" element={<BuyItem />}/>
          <Route path="/SearchResult" element={<SearchResult />}/>
          <Route path="/discover" element={<DailyDiscover />}/>
          <Route path="/addpr" element={<AddProduct />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/active" element= {<ActiveCart/>}/>






        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
