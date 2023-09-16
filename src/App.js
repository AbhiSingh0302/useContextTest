import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import { ItemContextProvider } from './store/AddItemContext';
import ItemList from './components/ItemList';
import { CartContextProvider } from './store/CartItemContext';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true)
  }

  const hideCardHandler = () => {
    setCartIsShown(false);
  }

  return (
    <ItemContextProvider>
      <CartContextProvider>
    {cartIsShown && <Cart onClose={hideCardHandler}/>}
    <Header onShowCart={showCardHandler}/>
    <ItemList/>
    </CartContextProvider>
    </ItemContextProvider>
  );
}

export default App;
