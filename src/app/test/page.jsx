"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';

function Orders() {
  const [orders, setOrders] = useState([]);
  const {data:session} = useSession();
  const userName = session?.user?.name;
  console.log(userName);
  const fetchData = () => {
    if (userName) {
      fetch(`http://localhost:3000/api/purchase`, {
        headers: {
          'x-user-name': 'mu-sicks'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setOrders(data))
      .catch(error => console.log('Fetch error: ', error));
    }
  };
  

  return (
    <div className="p-4">
      <button onClick={fetchData} className="px-4 py-2 bg-blue-500 text-white rounded">Fetch Data</button>
      {orders.map(order => (
        <div key={order._id} className="mt-4 p-4 border border-gray-200 rounded">
          <h2 className="text-xl font-bold">{order.name}</h2>
          <p>Total Amount: {order.totalAmount}</p>
          <p>Cart Length: {order.cartLength}</p>
          <p>Title With Price: {order.titleWithPrice}</p>
          <p>Created At: {new Date(order.createdAt).toLocaleString()}</p>
          <p>Updated At: {new Date(order.updatedAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
