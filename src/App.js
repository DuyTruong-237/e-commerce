import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import Profile from './Components/Profile/Profile';
import Item from './Components/Items/Item'
import ImageSlider from './Components/Product/ProductSlider';
import ProductItem from './Components/Product/ProductItem';
import ActiveCart from './Components/Cart/ActiveCart'
function App() {
  return (
    <div className="App">
      <ActiveCart/>
    </div>
  );
}

export default App;
