import { useContext } from "react"
import { itemContext } from "../store/AddItemContext"
import { cartContext } from "../store/CartItemContext";

const ItemList = () => {
    const ctx = useContext(itemContext);
    const cartCtx = useContext(cartContext);
    const clickHandler = (e) => {
        const id = e.target.id;
        const itemWithId = ctx.items.find(item => item.id.toString() === id.toString());
        if(itemWithId.amount === "Unavailable"){
            e.target.disabled = true;
        }else{
            ctx.reduceItem(id);
            const cartItem = cartCtx.items.find(item => item.id.toString() === id.toString());
            console.log(cartItem)
            if(cartItem){
                cartCtx.addItem({...cartItem, amount: Number(cartItem.amount)+1});
            }else{
                cartCtx.addItem({...itemWithId, amount: 1});
            }
        }
    }

    return <ul>
        {ctx.items.map(item => (
            <li key={item.id}>Name: {item.name} , Description: {item.description} , Price: {item.price} , Amount: {item.amount} 
            <button onClick={clickHandler} id={item.id}>Add To Cart</button>
            </li>
        ))}
    </ul>
}

export default ItemList