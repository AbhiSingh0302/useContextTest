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

    const reduceItem = (id) => {
        console.log(id);
        setItem(prev => prev.map(item => {
            console.log(item,id);
            if(item.id.toString() === id.toString()){
                if(Number(item.amount)>1){
                    return {...item, amount: Number(item.amount)-1}
                }
                return {...item, amount: "Unavailable"};
            }
            return item;
        }))
    }

    const cartContext = {
        items, addItem, reduceItem
    }

    return <itemContext.Provider value={cartContext}>
        {props.children}
    </itemContext.Provider>
}

export {itemContext, ItemContextProvider};