import CartButton from "./CartButton";

const Header = (props) => {
    return <header>
        <h1>Medical Shop</h1>
        <form>
            <input type="text" placeholder="Add a medicine"/>
            <input type="text" placeholder="Add a description"/>
            <input type="number" placeholder="Add a price"/>
            <input type="number" placeholder="Add an amount"/>
        </form>
        <CartButton onClick={props.onShowCart}/>
    </header>
}

export default Header;