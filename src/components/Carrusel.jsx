import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/products.css'
import Product from './Product';
export default function Carrusel({cart = {products: []}}) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1500 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1500, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return <div className='carrusel'>
      <h2>
        Cart #{cart.number}
      </h2>
      <div className='info-cart'>
        <span className='info-tag'>
          Total: &nbsp; <b>{cart.total}</b> $ 
        </span>
        <span className='info-tag'>   
          Discounted total: &nbsp; <strong>{cart.discountedTotal}</strong> $
        </span>
        <span className='info-tag'>
          Total Products: &nbsp; <strong>{cart.totalProducts}</strong> 
        </span>
        <span className='info-tag'>
          Total Quantity: &nbsp; <b>{cart.totalQuantity}</b> 
        </span>
      </div>
      <Carousel responsive={responsive}>
        {cart.products.map(prod => {

          return <Product 
            key={prod.id}
            article={prod.title}
            price={prod.price}
            quantity={prod.quantity}
            total={prod.total}
            perDiscount={prod.discountPercentage}
            discPrice={prod.discountedPrice}
            thumbnail={prod.thumbnail}
          />
        })}
      </Carousel>
    </div>
}
