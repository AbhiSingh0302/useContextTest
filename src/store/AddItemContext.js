import React from "react";
import { createContext, useState } from "react";

const itemContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
})

const ItemContextProvider = (props) => {
    const [items,setItem] = useState([]);
    const addItem = (item) => {
        setItem(prev => [...prev,item])
    }

    const removeItem = (id) => {
        setItem(prev => prev.filter(item => item.id !== id))
    }

    const cartContext = {
        items, addItem, removeItem
    }

    return <itemContext.Provider value={cartContext}>
        {props.children}
    </itemContext.Provider>
}

export {itemContext, ItemContextProvider};