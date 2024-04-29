import '../styles/Navigation.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/userSlice'

const NavLink = ({to, children, ...props}) => {
    return <Link 
    to={to} 
    {...props} 
    className={({isActive}) => isActive ? 'route-active' : undefined}
    >
        {children}
    </Link>
}

export default function Navigation(){
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOnClick = () => {
        dispatch(addUser({name: '', email: ''}))
        window.localStorage.setItem('jwt', '')
        return navigate('/login')
    }
    return <div className="Navigation">
        <ul>
            <li className='logo'>
                Products App
            </li>
            <li>
                <NavLink to="products" >
                    Products
                </NavLink>
            </li>
            <li className='left-margin'>
                {user.name === '' ? 
                <NavLink to="login" >
                    <span className='icon'>
                        <i className="fa-solid fa-right-to-bracket"></i>
                    </span>
                    Log in
                </NavLink> :
                user.name
                }
                
            </li>
            <li>
                {user.name === '' ?
                    <NavLink to="signin" >
                        <span className='icon'>
                            <i className="fa-regular fa-user"></i>
                        </span>
                        Sign in
                    </NavLink> 
                    :
                    <button onClick={handleOnClick}>Log Out</button>
                }
            </li>
        </ul>
    </div>
}