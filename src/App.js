import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true)
  }

  const hideCardHandler = () => {
    setCartIsShown(false);
  }

  return (
    <>
    {cartIsShown && <Cart onClose={hideCardHandler}/>}
    <Header onShowCart={showCardHandler}/>
    </>
  );
}

export default App;
