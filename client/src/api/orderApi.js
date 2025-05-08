import axios from "axios";
import { dataUrl } from "../share";

const createNewOrderService = (data) => {
  return axios.post(`${dataUrl}/create-new-order`, data);
};

const getAllOrdersService = () => {
  return axios.get(`${dataUrl}/get-all-orders`);
};

const editOrderService = (data) => {
  return axios.put(`${dataUrl}/edit-order`, data);
};

const deleteOrderService = (id) => {
  return axios.delete(`${dataUrl}/delete-order`, {
    data: {
      id: id,
    },
  });
};
const getOrdersByUserId = async (userId) => {
  try {
    const response = await axios.get(`${dataUrl}/get-orders-by-userId/${userId}`);
    return response.data.orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
export {
  createNewOrderService,
  getAllOrdersService,
  editOrderService,
  deleteOrderService,
  getOrdersByUserId
};
