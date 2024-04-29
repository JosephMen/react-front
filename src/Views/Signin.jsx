import Swal from "sweetalert2"
import '../styles/login.css'
import { Link, useNavigate } from "react-router-dom"
import endpoints from "../service/endpoints"
import signin from "../service/getAutentication"
export default function Signin(){
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // fetch(endpoints.signin, {
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email: email.value,
        //         name: names.value,
        //         password: pass.value
        //     })
        // })
        signin()
        .then(data => {
            if(data.ok){
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Account registered successfully',
                    willClose: () => {
                        return navigate('/login')
                    }
                })
                return
            }
            throw data
        }).catch(err => {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Server error",
              });
        })

    }
    return <div className='form-view'>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor=''>
                email
                <br />
                <input type="email" id='email' placeholder='abc@email.com' required/>
            </label>
            <label htmlFor="name">
                Name
                <br />
                <input type="text" id="names" required/>
            </label>
            <label htmlFor="pass">
                password
                <br />
                <input type="password" id="pass" required/>
            </label>

            <button>
                Register
            </button>
            <Link to="/login">
                Already Have an Account ?
            </Link>
        </form>
    </div>
}