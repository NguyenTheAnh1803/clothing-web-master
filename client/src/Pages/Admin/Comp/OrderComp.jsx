// import {
//   Box,
//   TableContainer,
//   Table,
//   TableCaption,
//   Thead,
//   Tr,
//   Th,
//   Tbody,
//   Td,
//   Tfoot,
//   Text,
//   IconButton,
//   Input,
//   Stack,
//   InputGroup,
//   InputLeftElement,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { SearchIcon } from "@chakra-ui/icons";
// import { convertPrice } from "../../../Utils/convertData";
// import moment from "moment";

// const OrderComp = ({ orders, handleShowModalOrder, handleDeleteOrder }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredOrders = orders.filter(order => {
//     const searchValue = searchTerm.toLowerCase();
//     return (
//       order.User?.firstName?.toLowerCase().includes(searchValue) ||
//       order.User?.lastName?.toLowerCase().includes(searchValue) ||
//       order.User?.email?.toLowerCase().includes(searchValue) ||
//       order.status?.toLowerCase().includes(searchValue)
//     );
//   });

//   return (
//     <Box textAlign={"center"} mb="20px" border={"1px solid #50555e"}>
//       <Stack direction={["column", "row"]} spacing={4} m={4}>
//         <InputGroup maxW="400px">
//           <InputLeftElement pointerEvents='none'>
//             <SearchIcon color='gray.400' />
//           </InputLeftElement>
//           <Input
//             placeholder="Tìm kiếm theo tên, email, trạng thái..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </InputGroup>
//       </Stack>

//       <TableContainer>
//         <Table variant="striped" colorScheme="teal">
//           <TableCaption>Thông tin đặt hàng</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>ID</Th>
//               <Th>Tên người đặt</Th>
//               <Th>Email</Th>
//               <Th>Địa chỉ</Th>
//               <Th>Tên sản phẩm</Th>
//               <Th>Trạng thái</Th>
//               <Th>Tổng tiền</Th>
//               <Th>Ngày đặt hàng</Th>
//               <Th>Quản lý</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {filteredOrders.length > 0 ? (
//               filteredOrders.map((order) => (
//                 <Tr key={order.id}>
//                   <Td>{order.id}</Td>
//                   <Td>{order.User.firstName + " " + order.User.lastName}</Td>
//                   <Td>{order.User.email}</Td>
//                   <Td>{order.User.address}</Td>
//                   <Td>
//                     {order.OrderDetails.map((item) => (
//                       <Text key={item.id} mb={2}>
//                         {item.Product.productName} x {item.quantity} ({item.size})
//                       </Text>
//                     ))}
//                   </Td>
//                   <Td textColor={"red"}>{order.status}</Td>
//                   <Td>{convertPrice(order.totalPrice)}</Td>
//                   <Td>
//                     {moment.utc(order.createdAt).local().format("DD-MM-YYYY")}
//                   </Td>
//                   <Td>
//                     <IconButton
//                       bg={"none"}
//                       aria-label="Edit"
//                       icon={<FaEdit />}
//                       onClick={() => handleShowModalOrder(order.id, "Update")}
//                       mr="2"
//                     />
//                     <IconButton
//                       bg={"none"}
//                       aria-label="Delete"
//                       icon={<FaTrash />}
//                       onClick={() => handleDeleteOrder(order.id)}
//                     />
//                   </Td>
//                 </Tr>
//               ))
//             ) : (
//               <Tr>
//                 <Td colSpan={9} textAlign="center" py={4}>
//                   <Text color="gray.500">Không tìm thấy đơn hàng nào</Text>
//                 </Td>
//               </Tr>
//             )}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default OrderComp;
// import {
//   Box,
//   TableContainer,
//   Table,
//   TableCaption,
//   Thead,
//   Tr,
//   Th,
//   Tbody,
//   Td,
//   Text,
//   IconButton,
//   Input,
//   Stack,
//   InputGroup,
//   InputLeftElement,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { SearchIcon } from "@chakra-ui/icons";
// import { convertPrice } from "../../../Utils/convertData";
// import moment from "moment";

// const OrderComp = ({ orders, handleShowModalOrder, handleDeleteOrder }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredOrders = orders.filter((order) => {
//     const searchValue = searchTerm.toLowerCase();
//     return (
//       order.User?.firstName?.toLowerCase().includes(searchValue) ||
//       order.User?.lastName?.toLowerCase().includes(searchValue) ||
//       order.User?.email?.toLowerCase().includes(searchValue) ||
//       order.status?.toLowerCase().includes(searchValue)
//     );
//   });

//   // Sắp xếp các đơn hàng theo ngày gần nhất
//   const sortedOrders = filteredOrders.sort((a, b) => {
//     return new Date(b.createdAt) - new Date(a.createdAt); // Sắp xếp theo ngày giảm dần
//   });

//   return (
//     <Box textAlign={"center"} mb="20px" border={"1px solid #50555e"}>
//       <Stack direction={["column", "row"]} spacing={4} m={4}>
//         <InputGroup maxW="400px">
//           <InputLeftElement pointerEvents="none">
//             <SearchIcon color="gray.400" />
//           </InputLeftElement>
//           <Input
//             placeholder="Tìm kiếm theo tên, email, trạng thái..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </InputGroup>
//       </Stack>

//       <TableContainer>
//         <Table variant="striped" colorScheme="teal">
//           <TableCaption>Thông tin đặt hàng</TableCaption>
//           <Thead>
//             <Tr>
//               <Th>ID</Th>
//               <Th>Tên người đặt</Th>
//               <Th>Email</Th>
//               <Th>Địa chỉ</Th>
//               <Th>Tên sản phẩm</Th>
//               <Th>Trạng thái</Th>
//               <Th>Tổng tiền</Th>
//               <Th>Ngày đặt hàng</Th>
//               <Th>Quản lý</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {sortedOrders.length > 0 ? (
//               sortedOrders.map((order) => (
//                 <Tr key={order.id}>
//                   <Td>{order.id}</Td>
//                   <Td>{order.User.firstName + " " + order.User.lastName}</Td>
//                   <Td>{order.User.email}</Td>
//                   <Td>{order.User.address}</Td>
//                   <Td>
//                     {order.OrderDetails.map((item) => (
//                       <Text key={item.id} mb={2}>
//                         {item.Product.productName} x {item.quantity} (
//                         {item.size})
//                       </Text>
//                     ))}
//                   </Td>
//                   <Td textColor={"red"}>{order.status}</Td>
//                   <Td>{convertPrice(order.totalPrice)}</Td>
//                   <Td>
//                     {moment.utc(order.createdAt).local().format("DD-MM-YYYY")}
//                   </Td>
//                   <Td>
//                     <IconButton
//                       bg={"none"}
//                       aria-label="Edit"
//                       icon={<FaEdit />}
//                       onClick={() => handleShowModalOrder(order.id, "Update")}
//                       mr="2"
//                     />
//                     <IconButton
//                       bg={"none"}
//                       aria-label="Delete"
//                       icon={<FaTrash />}
//                       onClick={() => handleDeleteOrder(order.id)}
//                     />
//                   </Td>
//                 </Tr>
//               ))
//             ) : (
//               <Tr>
//                 <Td colSpan={9} textAlign="center" py={4}>
//                   <Text color="gray.500">Không tìm thấy đơn hàng nào</Text>
//                 </Td>
//               </Tr>
//             )}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default OrderComp;
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
  IconButton,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { convertPrice } from "../../../Utils/convertData";
import moment from "moment";
import OrderDetailModal from "./OrderDetailModal"; // Import the modal component

const OrderComp = ({ orders, handleShowModalOrder, handleDeleteOrder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null); // State for selected order
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const filteredOrders = orders.filter((order) => {
    const searchValue = searchTerm.toLowerCase();
    return (
      order.User?.firstName?.toLowerCase().includes(searchValue) ||
      order.User?.lastName?.toLowerCase().includes(searchValue) ||
      order.User?.email?.toLowerCase().includes(searchValue) ||
      order.status?.toLowerCase().includes(searchValue)
    );
  });

  const sortedOrders = filteredOrders.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt); // Sort by date descending
  });

  // Function to open modal with order details
  const handleViewOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <Box textAlign={"center"} mb="20px" border={"1px solid #50555e"}>
      <Stack direction={["column", "row"]} spacing={4} m={4}>
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputLeftElement>
          <Input
            placeholder="Tìm kiếm theo tên, email, trạng thái..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
      </Stack>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Thông tin đặt hàng</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Tên người đặt</Th>
              <Th>Email</Th>
              <Th>Địa chỉ</Th>
              <Th>Tên sản phẩm</Th>
              <Th>Trạng thái</Th>
              <Th>Tổng tiền</Th>
              <Th>Ngày đặt hàng</Th>
              <Th>Quản lý</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedOrders.length > 0 ? (
              sortedOrders.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.id}</Td>
                  <Td>{order.User.firstName + " " + order.User.lastName}</Td>
                  <Td>{order.User.email}</Td>
                  <Td>{order.User.address}</Td>
                  <Td>
                    {order.OrderDetails.map((item) => (
                      <Text key={item.id} mb={2}>
                        {item.Product.productName} x {item.quantity} (
                        {item.size})
                      </Text>
                    ))}
                  </Td>
                  <Td textColor={"red"}>{order.status}</Td>
                  <Td>{convertPrice(order.totalPrice)}</Td>
                  <Td>
                    {moment.utc(order.createdAt).local().format("DD-MM-YYYY")}
                  </Td>
                  <Td>
                    <IconButton
                      bg={"none"}
                      aria-label="Edit"
                      icon={<FaEdit />}
                      onClick={() => handleShowModalOrder(order.id, "Update")}
                      mr="2"
                    />
                    <IconButton
                      bg={"none"}
                      aria-label="Delete"
                      icon={<FaTrash />}
                      onClick={() => handleDeleteOrder(order.id)}
                    />
                    <IconButton
                      bg={"none"}
                      aria-label="View Details"
                      icon={<Text>📋</Text>} // Use a simple text icon or custom icon
                      onClick={() => handleViewOrderDetails(order)} // Open details modal
                    />
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={9} textAlign="center" py={4}>
                  <Text color="gray.500">Không tìm thấy đơn hàng nào</Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Render the order detail modal */}
      <OrderDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        order={selectedOrder}
      />
    </Box>
  );
};

export default OrderComp;
