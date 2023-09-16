import { useContext, useState } from "react";
import { itemContext } from "../store/AddItemContext";
import CartButton from "./CartButton";

const Header = (props) => {
    const ctx = useContext(itemContext);

    const [name, setName] = useState("");
    const [description, setDesciption] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");

    const nameChangeHandler = e => {
        setName(e.target.value);
    }

    const descriptionChangeHandler = e => {
        setDesciption(e.target.value);
    }

    const priceChangeHandler = e => {
        setPrice(e.target.value);
    }

    const amountChangeHandler = e => {
        setAmount(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        ctx.addItem({id: Date.now(), name, description, price, amount})
    }



    return <header>
        <h1>Medical Shop</h1>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Add a medicine" value={name} onChange={nameChangeHandler}/>
            <input type="text" placeholder="Add a description" value={description} onChange={descriptionChangeHandler}/>
            <input type="number" placeholder="Add a price" value={price} onChange={priceChangeHandler}/>
            <input type="number" placeholder="Add an amount" value={amount} onChange={amountChangeHandler}/>
            <button> Add Item </button>
        </form>
        <CartButton onClick={props.onShowCart}/>
    </header>
}

export default Header;