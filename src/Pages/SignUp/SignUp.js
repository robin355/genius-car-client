import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Your Register succesfully')
                console.log(user)
            })
            .then(err => { console.log(err) })
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />

                        </div>
                    </form>
                    <p className='text-center'>Or SignUp With</p>
                    <div className='d-flex text-center'>
                        <button className='mr-3'><span><FaFacebook /></span></button>
                        <button className='mr-3'><span><FaGoogle /></span></button>
                        <button className='mr-3'><span><FaLinkedin /></span></button>
                    </div>
                    <p className='text-center'>Already Have an Accound?<Link className='text-orange-600 font-bold' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;