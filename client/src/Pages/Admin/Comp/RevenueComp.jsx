import {
  Box,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { convertPrice } from "../../../Utils/convertData";
import moment from "moment";

const RevenueComp = ({ dailyRevenue }) => {
  // Calculate the most recent revenue
  const sortedRevenue = dailyRevenue.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestRevenue = sortedRevenue[0] || null;

  return (
    <Box textAlign={"center"} mb="20px" border={"1px solid #50555e"}>
      {/* Display the latest revenue if available */}
      {latestRevenue && (
        <Box mb="20px">
          <Heading size="md">Doanh thu ngày gần nhất:</Heading>
          <Text fontSize="xl">
            {moment(latestRevenue.date).format("DD-MM-YYYY")}: {convertPrice(latestRevenue.totalRevenue)}
          </Text>
        </Box>
      )}
      
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Doanh thu theo ngày</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Ngày</Th>
              <Th>Số đơn đặt hàng</Th>
              <Th>Tổng doanh thu theo ngày</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dailyRevenue.length > 0 ? (
              dailyRevenue.map((data, index) => (
                <Tr key={data.date}>
                  <Td>{index + 1}</Td>
                  <Td>{moment(data.date).format("DD-MM-YYYY")}</Td>
                  <Td>{data.totalOrders}</Td>
                  <Td>{convertPrice(data.totalRevenue)}</Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={4} textAlign="center" py={4}>
                  <Text color="gray.500">Không có dữ liệu doanh thu</Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RevenueComp;
