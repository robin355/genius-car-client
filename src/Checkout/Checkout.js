import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData()
    const { _id, title, price } = service;
    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregister';
        const phone = form.phone.value;
        const massege = form.massege.value;
        const order = {

            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            massege
        }
        fetch('https://genius-car-server-opal-five.vercel.app/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged > 0) {
                    alert('Orders place successFully')
                    form.reset()
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className='text-4xl'>You About Want to:{title}</h2>
            <h2 className='text-4xl'>Price:{price}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
            </div>
            <textarea name='massege' className="textarea textarea-bordered h-24 w-full mt-2" placeholder="Your Message"></textarea>
            <input className='btn' type="submit" value="Submit" />


        </form>
    );
};

export default Checkout;