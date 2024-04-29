import '../styles/login.css'
import Swal from 'sweetalert2'
import { login } from '../service/getAutentication'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/userSlice'
import endpoints from '../service/endpoints' 
export default function Login(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user  = useSelector((state) => state.user)
    const handleSubmit = (e) => {
        e.preventDefault()
        // fetch(endpoints.login, {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({email: email.value, password: pass.value})
        // })
        // .then(data => data.json())
        login()
        .then((data) => {
            if(data.ok){
                dispatch(addUser({name: data.name, email: email.value}))
                window.localStorage.setItem('jwt', data.token)
                return navigate("/products")
            }
            throw data
        }).catch(err => {
            console.log(err)
            dispatch(addUser({name: "", email: ""}))
            window.localStorage.setItem('jwt', '')
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'Password or Email incorrects'
            })
        })     
    }
    const handleOnClick = () => {
        dispatch(addUser({name: "", email: ""}))
        window.localStorage.setItem('jwt', '')
    }
    return <div className='form-view'>
        {user.name === '' ? 
        <form onSubmit={handleSubmit}>
            
            <label htmlFor=''>
                email
                <br />
                <input type="email" id='email' placeholder='abc@email.com' required/>
            </label>
            <label htmlFor="pass">
                password
                <br />
                <input type="password" id="pass" required/>
            </label>

            <button>
                Log In
            </button>
            <Link to="/signin">
                Create Account
            </Link>
        </form> : 
        <div className='logged'>
            <div>
                <h3> You are already logged, </h3>
                <button onClick={handleOnClick} className='log-out'> Log Out</button>
            </div>
        </div>
        }
    </div>
}