import { useEffect, useState } from "react"
import getData from '../service/dummiedata'
import Carrusel from "../components/Carrusel";
import '../styles/products.css'
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import endpoints from "../service/endpoints";

export default function Products(){

    const [products, setProducts] = useState({
        carts: []
    })
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const jwt = window.localStorage.getItem('jwt') ?? ''
        if(jwt === '' || user.name === ''){
            dispatch(addUser({email: '',name: ''}))
            return navigate('/login')
        }
        // fetch(endpoints.products,{
        //     method: 'GET',
        //     headers: {
        //         authorization: jwt
        //     }
        // })
        // .then(data => data.json())
        getData()
        .then(data => {
            if(data.ok){
                console.log(data)
                setProducts(data.data)
                return
            }
            throw data
        })
        .catch(e => {
            console.log(e)
            window.localStorage.setItem('jwt', '')
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: 'Server error bringing data',
                willClose: () => {
                    return navigate('/login')
                }
            })
        })
    },[])
    
    return <div className="products-body">
        {products.carts.map((cart, index) => {
            cart.number = index + 1
            return <Carrusel key={cart.id} cart={cart} />
        })}
    </div>
}