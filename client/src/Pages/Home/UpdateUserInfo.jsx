import { Stack, VStack, Input, Divider, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../reducers/user";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateUserInfo = () => {
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!user) {
    navigate("/login");
  }

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [address, setAddress] = useState(user.address);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingPassword, setLoadingPassword] = useState(false);

  const handleEditUser = async () => {
    if (!firstName || !lastName || !email || !address || !phoneNumber) {
      toast.error("Nhập thiếu thông tin !");
    } else {
      const payload = {
        id: user.id,
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        newEmail: email,
        address: address,
        phoneNumber: phoneNumber,
      };

      dispatch(updateUser(payload, toast, navigate));
    }
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Vui lòng nhập đầy đủ thông tin mật khẩu!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới không khớp!");
      return;
    }

    try {
      setLoadingPassword(true);
      const token = JSON.parse(localStorage.getItem("UserToken"));
      const response = await axios.put(
        "http://localhost:8080/api/v1/change-password",
        {
          id: user.id,
          password: currentPassword,
          newPassword: newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );

      if (response.data.errCode === 0) {
        toast.success("Đổi mật khẩu thành công!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error(response.data.message || "Đổi mật khẩu thất bại!");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(error.response?.data?.message || "Đổi mật khẩu thất bại!");
    } finally {
      setLoadingPassword(false);
    }
  };

  return (
    <Stack my={10}>
      <VStack spacing={5}>
        <div className="input_div_main">
          <div>
            <div className="input_heading">THÔNG TIN CÁ NHÂN</div>
            <form>
              <div className="name_div">
                <div className="name">
                  <label>
                    First Name<span> *</span>
                  </label>
                  <br />
                  <Input
                    type="text"
                    style={{ paddingLeft: "10px" }}
                    value={firstName}
                    name="name"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="name">
                  <label>
                    Last Name<span> *</span>
                  </label>
                  <br />
                  <Input
                    type="text"
                    value={lastName}
                    style={{ paddingLeft: "10px" }}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input_details">
                <label>
                  Email<span> *</span>
                </label>
                <br />
                <Input
                  type="email"
                  value={email}
                  style={{ paddingLeft: "10px" }}
                  name="name"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input_details">
                <label>
                  Address<span> *</span>
                </label>
                <br />
                <Input
                  type="text"
                  value={address}
                  style={{ paddingLeft: "10px" }}
                  name="number"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="input_details">
                <label>
                  Phone<span> *</span>
                </label>
                <br />
                <Input
                  type="number"
                  value={phoneNumber}
                  style={{ paddingLeft: "10px" }}
                  name="password"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <Divider borderColor={"silver"} my={5} />
              <Button
                isLoading={loading}
                colorScheme="whatsapp"
                onClick={handleEditUser}
              >
                Cập nhật thông tin cá nhân
              </Button>
            </form>

            <Divider borderColor={"silver"} my={5} />
            <div className="input_heading">ĐỔI MẬT KHẨU</div>
            <form>
              <div className="input_details">
                <label>Mật khẩu hiện tại<span> *</span></label>
                <br />
                <Input
                  type="password"
                  value={currentPassword}
                  style={{ paddingLeft: "10px" }}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>

              <div className="input_details">
                <label>Mật khẩu mới<span> *</span></label>
                <br />
                <Input
                  type="password"
                  value={newPassword}
                  style={{ paddingLeft: "10px" }}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              <div className="input_details">
                <label>Xác nhận mật khẩu mới<span> *</span></label>
                <br />
                <Input
                  type="password"
                  value={confirmPassword}
                  style={{ paddingLeft: "10px" }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <Divider borderColor={"silver"} my={5} />
              <Button
                isLoading={loadingPassword}
                colorScheme="blue"
                onClick={handleChangePassword}
              >
                Đổi mật khẩu
              </Button>
            </form>
          </div>
        </div>
      </VStack>
    </Stack>
  );
};

export default UpdateUserInfo;
