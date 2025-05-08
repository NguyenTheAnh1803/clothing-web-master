// OrderDetailModal.js
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { convertPrice } from "../../../Utils/convertData";
import moment from "moment";

const OrderDetailModal = ({ isOpen, onClose, order }) => {
  if (!order) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Chi tiết đơn hàng #{order.id}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={4}>
            <Text fontWeight="bold">Người đặt: </Text>
            <Text>{order.User.firstName + " " + order.User.lastName}</Text>
            <Text>{order.User.email}</Text>
            <Text>{order.User.address}</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Tên sản phẩm:</Text>
            {order.OrderDetails.map((item) => (
              <Text key={item.id}>
                {item.Product.productName} x {item.quantity} ({item.size})
              </Text>
            ))}
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Trạng thái:</Text>
            <Text color="red">{order.status}</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Tổng tiền:</Text>
            <Text>{convertPrice(order.totalPrice)}</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Ngày đặt hàng:</Text>
            <Text>
              {moment.utc(order.createdAt).local().format("DD-MM-YYYY")}
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Đóng
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default OrderDetailModal;
