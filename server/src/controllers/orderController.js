import {
  createNewOrder,
  getALlOrders,
  editOrder,
  deleteOrder,
} from "../services/orderService";
import db from "../models/index";
const handleCreateNewOrder = async (req, res) => {
  const response = await createNewOrder(req.body);
  return res.status(200).json(response);
};

const handleGetALlOrders = async (req, res) => {
  const response = await getALlOrders();
  return res.status(200).json(response);
};

const handleEditOrder = async (req, res) => {
  const response = await editOrder(req.body);
  return res.status(200).json(response);
};

const handleDeleteOrder = async (req, res) => {
  const response = await deleteOrder(req.body.id);
  return res.status(200).json(response);
};

const handleGetOrdersWithDetailsByUserId = async (req, res) => {
  const { userId } = req.params;

  const query = `
    SELECT 
      o.id AS orderId, 
      od.productId, 
      p.name AS productName, 
      p.price, 
      od.quantity, 
      od.size 
    FROM orders o
    INNER JOIN orderdetails od ON o.id = od.orderId
    INNER JOIN products p ON od.productId = p.id
    WHERE o.userId = ?`;

  try {
    const [results] = await db.query(query, [userId]);
    res.status(200).json({ success: true, data: results });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
module.exports = {
  handleCreateNewOrder,
  handleGetALlOrders,
  handleEditOrder,
  handleDeleteOrder,
  handleGetOrdersWithDetailsByUserId
};
