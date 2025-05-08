import {
  Box,
  Text,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  IconButton,
  Image,
  Button,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTrash, FaEdit, FaImage, FaFileExcel } from "react-icons/fa";
import { convertPrice } from "../../../Utils/convertData";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import * as XLSX from "xlsx";
import { SearchIcon } from "@chakra-ui/icons";

const ProductComp = ({
  handleDeleteProduct,
  handleShowModalProduct,
  products,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(item => {
    const searchValue = searchTerm.toLowerCase();
    return (
      item.productName?.toLowerCase().includes(searchValue) ||
      item.Category?.categoryName?.toLowerCase().includes(searchValue)
    );
  });

  const exportToExcel = () => {
    // Chuẩn bị dữ liệu cho Excel
    const excelData = products.map(item => ({
      'ID': item.id,
      'Tên sản phẩm': item.productName,
      'Danh mục': item.Category.categoryName,
      'Tổng số lượng': item.quantity,
      'Số lượng size S': item.ProductSizes[0]?.quantity || 0,
      'Số lượng size M': item.ProductSizes[1]?.quantity || 0,
      'Số lượng size L': item.ProductSizes[2]?.quantity || 0,
      'Giá': item.price,
      'Giảm giá': item.sale ? 'Có' : 'Không',
      'Sản phẩm mới': item.newProduct ? 'Có' : 'Không',
    }));

    // Tạo workbook và worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Thêm worksheet vào workbook
    XLSX.utils.book_append_sheet(wb, ws, "Danh sách sản phẩm");

    // Tạo file Excel và tải xuống
    XLSX.writeFile(wb, "danh-sach-san-pham.xlsx");
  };

  return (
    <Box p={"2"} textAlign={"center"} mb="20px" border={"2px solid #50555e"}>
      <Stack direction={["column", "row"]} spacing={'38%'} mb={4}>
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.400' />
          </InputLeftElement>
          <Input
            placeholder="Tìm kiếm theo tên sản phẩm, danh mục..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <Button
          colorScheme="green"
          onClick={exportToExcel}
          leftIcon={<FaFileExcel />}
        >
          Xuất Excel
        </Button>
      </Stack>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Thông tin sản phẩm</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Tên sản phẩm</Th>
              <Th>Tên danh mục</Th>
              <Th>Ảnh</Th>
              <Th>Tổng số lượng</Th>
              <Th>Số lượng size S</Th>
              <Th>Số lượng size M</Th>
              <Th>Số lượng size L</Th>
              <Th>Giá</Th>
              <Th>Giảm giá</Th>
              <Th>Sản phẩm mới</Th>
              <Th>Quản lý</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.productName}</Td>
                  <Td>{item.Category.categoryName}</Td>
                  <Td>
                    <Image
                      objectFit="contain"
                      boxSize="100px"
                      src={`data:image/jpeg;base64,${item.imageUrl}`}
                    />
                  </Td>
                  <Td>{item.quantity}</Td>
                  <Td>{item.ProductSizes[0]?.quantity}</Td>
                  <Td>{item.ProductSizes[1]?.quantity}</Td>
                  <Td>{item.ProductSizes[2]?.quantity}</Td>
                  <Td>{convertPrice(item.price)}</Td>
                  <Td textColor={"red"}>
                    {item.sale ? <FaCheck /> : <ImCross />}
                  </Td>
                  <Td textColor={"red"}>
                    {item.newProduct ? <FaCheck /> : <ImCross />}
                  </Td>
                  <Td>
                    <IconButton
                      bg={"none"}
                      aria-label="Edit"
                      icon={<FaEdit />}
                      onClick={() => handleShowModalProduct(item.id, "Update")}
                      mr="2"
                    />
                    <IconButton
                      bg={"none"}
                      aria-label="Edit"
                      icon={<FaImage />}
                      onClick={() => handleShowModalProduct(item.id, "Update_image")}
                      mr="2"
                    />
                    <IconButton
                      bg={"none"}
                      aria-label="Delete"
                      icon={<FaTrash />}
                      onClick={() => handleDeleteProduct(item.id)}
                    />
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={12} textAlign="center" py={4}>
                  <Text color="gray.500">Không tìm thấy sản phẩm nào</Text>
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductComp;
