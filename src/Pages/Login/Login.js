import { React, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
const Login = () => {
    const { signInEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signInEmail(email, password)
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }
                toast.success('Your Login Successfull')
                fetch(`https://genius-car-server-opal-five.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('genius-token', data.token)
                        navigate(from, { replace: true })
                    })


            })
            .catch(err => {
                toast.success('Your Password Worng')
            })
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                    <p className='text-center'>Or SignUp With</p>
                    <div className='d-flex text-center mt-3'>
                        <button className='mr-3'><span><FaFacebook /></span></button>
                        <button className='mr-3'><span><FaGoogle /></span></button>
                        <button className='mr-3'><span><FaLinkedin /></span></button>
                    </div>
                    <p className='text-center'>New to Genius Car?<Link className='text-orange-600 font-bold' to='/signUp'>Sign Up</Link> </p>
                </div>
            </div>
        </div>

    );
};

export default Login;