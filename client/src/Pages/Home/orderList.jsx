import React, { useEffect, useState } from "react";
import { getOrdersDetailsByUserId } from "../../api/orderAPIDetail";

const OrderList = ({ userId }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrdersDetailsByUserId(userId);
        setOrders(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order List</h2>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index}>
            <h3>Order ID: {order.orderId}</h3>
            <ul>
              <li>Product ID: {order.productId}</li>
              <li>Product Name: {order.productName}</li>
              <li>Price: {order.price}</li>
              <li>Quantity: {order.quantity}</li>
              <li>Size: {order.size}</li>
            </ul>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderList;
