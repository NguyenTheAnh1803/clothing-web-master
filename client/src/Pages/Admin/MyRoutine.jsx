import React, { useState } from "react";
import { 
  Box, 
  Button, 
  Divider, 
  Text,
  Input,
  Stack,
  InputGroup,
  InputLeftElement 
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import UserComp from "./Comp/UserComp";

const MyRoutine = ({ users = [], handleShowModalUser, handleDeleteUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(user => {
    const searchValue = searchTerm.toLowerCase();
    return (
      user.firstName?.toLowerCase().includes(searchValue) ||
      user.lastName?.toLowerCase().includes(searchValue) ||
      user.email?.toLowerCase().includes(searchValue)
    );
  });

  return (
    <Box>
      <Text>Tất cả người dùng</Text>
      <Divider
        mt="3px"
        mb="3px"
        orientation="horizontal"
        style={{ color: "red", size: "20" }}
      />

      <Stack direction={["column", "row"]} spacing={'250px'} mb={4}>
        <InputGroup maxW="400px">
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.400' />
          </InputLeftElement>
          <Input
            placeholder="Tìm kiếm theo tên, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <Button
          colorScheme="whatsapp"
          onClick={() => handleShowModalUser(null, "Create")}
        >
          + Tạo người dùng mới
        </Button>
      </Stack>

      <Box>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((el, index) => (
            <UserComp
              key={index}
              {...el}
              handleShowModalUser={handleShowModalUser}
              handleDeleteUser={handleDeleteUser}
            />
          ))
        ) : (
          <Text textAlign="center" color="gray.500" mt={4}>
            Không tìm thấy người dùng nào
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default MyRoutine;
