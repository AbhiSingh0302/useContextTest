import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import { ItemContextProvider } from './store/AddItemContext';

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
    {cartIsShown && <Cart onClose={hideCardHandler}/>}
    <Header onShowCart={showCardHandler}/>
    </ItemContextProvider>
  );
}

export default App;
