import { useContext } from 'react';
import Modal from '../UI/Modal';
import { cartContext } from '../store/CartItemContext';

const Cart = props => {
    const cartCtx = useContext(cartContext);

    return (
        <Modal onClose={props.onClose}>
            <h1>Your Cart</h1>
            {cartCtx.items.map(item => (
                <p>Name: {item.name} , Description: {item.description} , Price: {item.price} , Amount: {item.amount}</p>
            ))}
        </Modal>
    )
}

export default Cart