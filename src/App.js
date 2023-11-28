import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home/Home'
import Login from './Screens/Login/Login'
import Profile from './Screens/Profile/Profile';
import ListItem from './Components/ListItem-Cart/ListItem';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/list" element={<ListItem />}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
