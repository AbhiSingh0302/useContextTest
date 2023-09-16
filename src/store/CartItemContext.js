import { createContext, useState } from "react";

const cartContext = createContext({
    items: [],
    addItem: (item) => {}
});

const CartContextProvider = props => {
    const [items,setItems] = useState([]);

    const addItem = (item) => {
        setItems(prev => {
            const filteredItems = prev.filter(ele => ele.id.toString() !== item.id.toString());
            return [...filteredItems,item];
        });
    }
    const cartItem = {items, addItem};
    return <cartContext.Provider value={cartItem}>
        {props.children}
    </cartContext.Provider>
}

export {cartContext, CartContextProvider};
