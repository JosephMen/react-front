import '../styles/product.css'
export default function Product({article, price, quantity, total, perDiscount, discPrice, thumbnail}) {
    return <article className="product-card">
        <div className="imagen">
            <img src={thumbnail} alt="product image" />
        </div>
        <footer className='footer-product'>
            <div >Article: <b>{article} </b></div>
            <div > Price: <b>{price} </b> $ </div>
            <div > Quantity: <b>{quantity}</b> </div>
            <div > Total: <b>{total}</b> $</div>
            <div> % Discount: <b>{perDiscount}</b>  $</div>
            <div> Discount Price: <b>{discPrice}</b> $</div>
            
        </footer>
    </article>
}
