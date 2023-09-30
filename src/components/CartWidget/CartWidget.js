import cart from './assets/cart.svg';

const CartWidget = () => { 
    return (
        <div className='cardCar'>
            <img src={cart} width="30" heigth="30"  alt="cart-widget"/>
            0
        </div>
    )
}
export default CartWidget