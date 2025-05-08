import axios from "axios";
import { dataUrl } from "../share"; // Đường dẫn base URL của bạn

export const getOrdersDetailsByUserId = async (userId) => {
  try {
    const response = await axios.get(`${dataUrl}/get-orders-details/${userId}`);
    return response.data.data; // Trả về dữ liệu đơn hàng
  } catch (error) {
    console.error("Error fetching orders with details:", error);
    throw error;
  }
};
