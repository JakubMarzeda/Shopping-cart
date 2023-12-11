import "./Cart.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { deleteProduct, updateCountProduct, deleteAllProducts } from '../Reducer/Shopping-cart-reducer';

const Cart = () => {
    const cartList = useSelector((state) => state.shoppingCart.list);

    const isEmpty = cartList.length === 0;

    const dispatch = useDispatch()

    
    const handleDeleteProduct = (productId) => {
        dispatch(deleteProduct(productId));
    }

    const handleUpdateProduct = (productId, newQuantity) => {
        dispatch(updateCountProduct({ id: productId, quantity: newQuantity }))
    }

    const handleDeleteAllProducts = () => {
        dispatch(deleteAllProducts())
    }

    return (
        <div className="container-cart-products">
            <div className="cart-products">
                <div className="cart-products-header">
                    <h2>Lista produktów</h2>
                </div>
                <div className="products">
                    
                    {isEmpty ? (
                        <span className="info-not-product-in-cart">Nie dodano żadnego produktu</span>
                    ) : (
                        cartList.map((product) => (
                            <div className="product-in-cart" key={product.id}>
                                <div className="product-info-in-cart">
                                    <div className="img-product-container">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="product-name-cart">
                                        <span>{product.name}</span>
                                    </div>
                                </div>
                                <div className="change-count-products-cart">
                                    <button onClick={() => handleUpdateProduct(product.id, product.quantity + 1)} className="add-product">+</button>
                                    <button onClick={() => {if (product.quantity > 1) {
                                        handleUpdateProduct(product.id, product.quantity - 1)
                                    }}} className="substract-product">-</button>
                                </div>
                                <div className="count-sum-price-of-one-product">
                                    <span>{product.quantity}</span>
                                    <span>*</span>
                                    <span>{product.price} zł</span>
                                </div>
                                <div className="delete-product">
                                    <img onClick={() => handleDeleteProduct(product.id)} src="../../../public/images/bin.png" alt="" />
                                </div>
                            </div>
                        ))
                    )}
                    {!isEmpty && (
                        <div className="clear-all-products">
                            <button onClick={() => handleDeleteAllProducts()}>Usuń wszystko</button>
                        </div>
                    )}

                </div>
                <div className="price-products-container">
                    <span>Łączna kwota</span>
                    <span>{cartList.reduce((sum, product) => sum + product.quantity * product.price, 0)} zł</span>
                </div>

            </div>
        </div>
    )
}

export default Cart