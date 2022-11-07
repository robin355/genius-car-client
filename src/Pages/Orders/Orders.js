import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, Logout } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`https://genius-car-server-opal-five.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Logout()
                }
                return res.json()
            })
            .then(data => setOrders(data))
    }, [user?.email])
    const handleDelete = (id) => {
        const proceed = window.confirm(`Are You sure,You cancel Your Order`)
        if (proceed) {
            fetch(`https://genius-car-server-opal-five.vercel.app/orders/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                        const remaing = orders.filter(ord => ord._id !== id)
                        setOrders(remaing)
                    }
                })
        }
    }
    const handleStatuseUpdate = (id) => {
        fetch(`https://genius-car-server-opal-five.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaing = orders.filter(ord => ord._id !== id)
                    const approving = orders.find(ord => ord === id)
                    approving.status = 'approved';
                    const newOrder = [approving, ...remaing]
                    setOrders(newOrder)
                }
                console.log(data)
            })
    }
    return (
        <div>
            <div className="">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete} handleStatuseUpdate={handleStatuseUpdate}></OrderRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;