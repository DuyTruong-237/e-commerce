import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home'
import Login from './Screens/Login/Login'
import Profile from './Screens/Profile/Profile';
import ListItem from './Components/ListItem-Cart/ListItem';
import ProductItem from './Components/Product/ProductItem';
import ItemProducts from './Components/ItemProducts/ItemProducts';
import ActiveCart from './Components/Cart/ActiveCart'
import BuyItem from './Components/Items/Item'
import DailyDiscover from './Screens/DailyDiscover/DailyDiscover';
import SearchResult from './Screens/SearchResult/SearchResult';
import Shop from './Screens/Shop/Shop';
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/list" element={<ListItem />}/>
          <Route path="/cart" element={<ActiveCart />}/>
          <Route path="/inforproduct" element={<BuyItem />}/>
          <Route path="/SearchResult" element={<SearchResult />}/>

          <Route path="/discover" element={<DailyDiscover />}/>
          <Route path="/shop" element={<Shop />}/>




        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
