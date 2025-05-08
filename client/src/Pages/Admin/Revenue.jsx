import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { saveAs } from "file-saver"; // Optional: for saving the file
import * as XLSX from "xlsx"; // Import the xlsx library
import OrderComp from "./Comp/OrderComp";
import moment from "moment";
import RevenueComp from "./Comp/RevenueComp";

const Revenue = ({ orders }) => {
  const dailyRevenue = orders.reduce((acc, order) => {
    const orderDate = moment.utc(order.createdAt).local().format("DD-MM-YYYY");
    const index = acc.findIndex((data) => data.date === orderDate);
    if (index >= 0) {
      acc[index].totalOrders += 1;
      acc[index].totalRevenue += order.totalPrice;
    } else {
      acc.push({
        date: orderDate,
        totalOrders: 1,
        totalRevenue: order.totalPrice,
      });
    }
    return acc;
  }, []);

  // Function to export data to Excel
  const exportToExcel = () => {
    // Convert the dailyRevenue data into a format suitable for Excel
    const worksheet = XLSX.utils.json_to_sheet(dailyRevenue);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Doanh thu");

    // Generate buffer and create a blob
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: EXCEL_TYPE });

    // Create a link element, use it to download the Excel file
    const url = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "doanh_thu.xlsx"); // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  return (
    <>
      <Text fontSize="xl">Doanh thu</Text>
      <Divider
        my={5}
        orientation="horizontal"
        style={{ color: "red", size: "20" }}
      />

      <Button onClick={exportToExcel} colorScheme="teal" mb={4}>
        Xuất Excel
      </Button>

      {orders && <RevenueComp dailyRevenue={dailyRevenue} />}
    </>
  );
};

export default Revenue;
