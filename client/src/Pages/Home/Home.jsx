// import { Box, Text, Image, Flex, Divider } from "@chakra-ui/react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { NavLink, useNavigate } from "react-router-dom";

// // import { Images } from "./Data";
// import { useEffect, useState } from "react";
// import React from "react";
// import slide5 from "../../assets/images/slide5.png";
// import slide6 from "../../assets/images/slide6.png";
// import slide7 from "../../assets/images/slide7.png";
// import slider4 from "../../assets/images/slider4.png";
// import shirtIcon from "../../assets/images/shirt-icon.png";
// import pantIcon from "../../assets/images/pant-icon.png";
// import dressIcon from "../../assets/images/dress-icon.png";
// import earringIcon from "../../assets/images/earring-icon.png";
// import newProductsIcon from "../../assets/images/new-products-icon.png";
// import saleIcon from "../../assets/images/sale-icon.png";

// const Home = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     cssEase: "linear",
//   };
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // console.log("data------", data);
//   }, [data]);

//   return (
//     <>
//       {/* slider */}
//       <Box
//         w="90%"
//         m="auto"
//         mt="40px"
//         display={["inline", "flex", "flex"]}
//         p="2px"
//         justifyContent="space-between"
//         border="0.3px solid grey"
//         style={{ zIndex: "-100" }}
//       >
//         {/* option */}
//         {/* <Box
//           ml={["16px", "16px", "16px"]}
//           display={["block", "block", null, null, null]}
//           width={["80%", "35%", "27%"]}
//         >
//           <Box display="flex" p={["5px 10px", "2px 2px", "2px 9px"]}>
//             <Box>
//               <IoIosMenu size="24px"></IoIosMenu>
//             </Box>
//             <Box>
//               <Text
//                 marginLeft="3px"
//                 pt={["2px", "3px", "0px"]}
//                 fontWeight="bold"
//                 fontSize={["13px", "12px", "16px"]}
//               >
//                 TẤT CẢ DANH MỤC
//               </Text>
//             </Box>
//           </Box>

//           <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
//             <Box>
//               <Image
//                 // width={["69%", "68%", "78%"]}
//                 marginRight="5px"
//                 boxSize={"30px"}
//                 objectFit={"contain"}
//                 src={shirtIcon}
//               />
//             </Box>
//             <NavLink to="/shirt">
//               <Box>
//                 <Text fontSize={["12px", "12px", "15px"]}>Áo</Text>
//               </Box>
//             </NavLink>
//           </Box>

//           <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
//             <Box>
//               <Image
//                 width={["69%", "68%", "78%"]}
//                 marginRight="5px"
//                 boxSize={"30px"}
//                 objectFit={"contain"}
//                 src={pantIcon}
//               />
//             </Box>
//             <NavLink to="/shirt">
//               <Box>
//                 <Text fontSize={["12px", "12px", "15px"]}>Quần</Text>
//               </Box>
//             </NavLink>
//           </Box>

//           <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
//             <Box>
//               <Image
//                 width={["69%", "68%", "78%"]}
//                 marginRight="5px"
//                 boxSize={"30px"}
//                 objectFit={"contain"}
//                 src={dressIcon}
//               />
//             </Box>
//             <NavLink to="/pant">
//               <Box>
//                 <Text fontSize={["12px", "12px", "15px"]}>Giày dép</Text>
//               </Box>
//             </NavLink>
//           </Box>

//           <Box display="flex" p={["1px 10px", "1px 4px", "4px 11px"]}>
//             <Box>
//               <Image
//                 width={["69%", "68%", "78%"]}
//                 marginRight="5px"
//                 boxSize={"30px"}
//                 objectFit={"contain"}
//                 src={earringIcon}
//               />
//             </Box>
//             <NavLink to="/accessory">
//               <Box>
//                 <Text fontSize={["12px", "12px", "15px"]}>Phụ kiện</Text>
//               </Box>
//             </NavLink>
//           </Box>
//         </Box> */}
//         {/* end option */}
//         {/* Slider */}
//         <Box
//           p="0.5px"
//           // border={"1px solid red"}
//           margin="auto"
//           // width={["89%", "73%", "73%"]}
//           w={"100%"}
//           style={{ zIndex: "-100" }}
//         >
//           <Slider {...settings}>
//             <Box>
//               <Image
//                 objectFit="contain"
//                 boxSize={"fit-content"}
//                 src={slide5}
//               />
//             </Box>
//             <Box>
//               <Image
//                 objectFit="contain"
//                 boxSize={"fit-content"}
//                 src={slide6}
//               />
//             </Box>

//             <Box>
//               <Image
//                 objectFit="contain"
//                 boxSize={"fit-content"}
//                 src={slide7}
//               />
//             </Box>
//           </Slider>
//         </Box>
//       </Box>
//       {/* end slider */}

//       {/* categories */}
//       <Box w="90%" m="auto">
//         <Text
//           my={"12"}
//           textAlign={"center"}
//           fontWeight={"bold"}
//           fontSize={"xl"}
//         >
//           DANH MỤC SẢN PHẨM
//         </Text>

//         <Flex
//           justifyContent={"space-around"}
//           alignItems="center"
//           direction={{ base: "column", lg: "row" }}
//         >
//           <Box cursor={"pointer"} onClick={() => navigate("/shirt")}>
//             <Image
//               // width={["69%", "68%", "78%"]}
//               // border={"1px solid red"}
//               // borderRadius={"full"}
//               // marginRight="5px"
//               boxSize={{ base: "70px", lg: "100px" }}
//               p={4}
//               objectFit={"contain"}
//               src={shirtIcon}
//               m={"auto"}
//             />

//             <Text
//               textAlign={"center"}
//               fontWeight={"semibold"}
//               fontSize={["12px", "12px", "20px"]}
//             >
//               Áo
//             </Text>
//           </Box>

//           <Box cursor={"pointer"} onClick={() => navigate("/pant")}>
//             <Image
//               // width={["69%", "68%", "78%"]}
//               // border={"1px solid red"}
//               // borderRadius={"full"}
//               // marginRight="5px"
//               boxSize={{ base: "70px", lg: "100px" }}
//               p={4}
//               objectFit={"contain"}
//               src={pantIcon}
//               m={"auto"}
//             />

//             <Text
//               textAlign={"center"}
//               fontWeight={"semibold"}
//               fontSize={["12px", "12px", "20px"]}
//             >
//               Quần
//             </Text>
//           </Box>

//           <Box cursor={"pointer"} onClick={() => navigate("/dress")}>
//             <Image
//               // width={["69%", "68%", "78%"]}
//               // border={"1px solid red"}
//               // borderRadius={"full"}
//               // marginRight="5px"
//               boxSize={{ base: "70px", lg: "100px" }}
//               p={4}
//               objectFit={"contain"}
//               src={dressIcon}
//               m={"auto"}
//             />

//             <Text
//               textAlign={"center"}
//               fontWeight={"semibold"}
//               fontSize={["12px", "12px", "20px"]}
//             >
//               Giày dép
//             </Text>
//           </Box>

//           <Box cursor={"pointer"} onClick={() => navigate("/accessory")}>
//             <Image
//               // width={["69%", "68%", "78%"]}
//               // border={"1px solid red"}
//               // borderRadius={"full"}
//               // marginRight="5px"
//               boxSize={{ base: "70px", lg: "100px" }}
//               p={4}
//               objectFit={"contain"}
//               src={earringIcon}
//               m={"auto"}
//             />

//             <Text
//               textAlign={"center"}
//               fontWeight={"semibold"}
//               fontSize={["12px", "12px", "20px"]}
//             >
//               Phụ kiện
//             </Text>
//           </Box>
//         </Flex>
//       </Box>
//       {/* end categories */}

//       <br />
//       <Box w="90%" m="auto">
//         <Image w="100%" src={slider4} />
//       </Box>

//       <br />
//       {/* <BestSeller /> */}
//       <Box w="90%" m="auto">
//         <Flex
//           justifyContent={"space-around"}
//           alignItems="center"
//           direction={{ base: "column", md: "row", lg: "row" }}
//           my={5}
//         >
//           <Box cursor={"pointer"} onClick={() => navigate("/new-products")}>
//             <Image
//               // width={["69%", "68%", "78%"]}
//               // border={"1px solid red"}
//               // borderRadius={"full"}
//               // marginRight="5px"
//               boxSize={{ base: "70px", lg: "100px" }}
//               p={4}
//               objectFit={"contain"}
//               src={newProductsIcon}
//               m={"auto"}
//             />

//             <Text
//               textAlign={"center"}
//               fontWeight={"semibold"}
//               fontSize={["12px", "12px", "20px"]}
//               textDecoration={"underline"}
//             >
//               Sản phẩm mới
//             </Text>
//           </Box>

//           <Box cursor={"pointer"} onClick={() => navigate("/sale-products")}>
//             <Image
//               // width={["69%", "68%", "78%"]}
//               // border={"1px solid red"}
//               // borderRadius={"full"}
//               // marginRight="5px"
//               boxSize={{ base: "70px", lg: "100px" }}
//               p={4}
//               objectFit={"contain"}
//               src={saleIcon}
//               m={"auto"}
//             />

//             <Text
//               textAlign={"center"}
//               fontWeight={"semibold"}
//               fontSize={["12px", "12px", "20px"]}
//               textDecoration={"underline"}
//             >
//               Giảm giá
//             </Text>
//           </Box>
//         </Flex>
//       </Box>
//       <br />
//       <Divider mt="5px" mb="3px" orientation="horizontal" />
//     </>
//   );
// };
// export default React.memo(Home);
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavLink, useNavigate } from "react-router-dom";
import slide5 from "../../assets/images/slide5.png";
import slide6 from "../../assets/images/slide6.png";
import slide7 from "../../assets/images/slide7.png";
import shirtIcon from "../../assets/images/shirt-icon.png";
import pantIcon from "../../assets/images/pant-icon.png";
import dressIcon from "../../assets/images/dress-icon.png";
import earringIcon from "../../assets/images/earring-icon.png";
import { IoIosMenu } from "react-icons/io";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const navigate = useNavigate();

  return (
    <>
      {/* Slider */}
      <Box
        w="90%"
        m="auto"
        mt="40px"
        p="0px"
      >
        <Slider {...settings}>
          {/* Slide 1 */}
          <Box>
            <Image
              src={slide5}
              objectFit="cover"
              w="100%"
              h="400px"
            />
          </Box>

          {/* Slide 2 */}
          <Box>
            <Image
              src={slide6}
              objectFit="cover"
              w="100%"
              h="400px"
            />
          </Box>

          {/* Slide 3 */}
          <Box>
            <Image
              src={slide7}
              objectFit="cover"
              w="100%"
              h="400px"
            />
          </Box>
        </Slider>
      </Box>

      <br />

      {/* Danh mục sản phẩm */}
      <Box w="90%" m="auto">
        <Text
          my={"12"}
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"xl"}
        >
          DANH MỤC SẢN PHẨM
        </Text>
        
        {/* Thêm direction column để chúng hiển thị theo chiều dọc */}
        <Flex
          justifyContent={"center"}
          alignItems="center"
          direction={{ base: "column", sm: "column", md: "row" }} 
          gap={4}
        >
          {/* Áo */}
          <Box cursor={"pointer"} onClick={() => navigate("/shirt")}>
            <Image
              boxSize={{ base: "70px", lg: "100px" }}
              p={4}
              objectFit={"contain"}
              src={shirtIcon}
              m={"auto"}
            />
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={["12px", "12px", "20px"]}
            >
              Áo
            </Text>
          </Box>

          {/* Quần */}
          <Box cursor={"pointer"} onClick={() => navigate("/pant")}>
            <Image
              boxSize={{ base: "70px", lg: "100px" }}
              p={4}
              objectFit={"contain"}
              src={pantIcon}
              m={"auto"}
            />
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={["12px", "12px", "20px"]}
            >
              Quần
            </Text>
          </Box>

          {/* Giày dép */}
          <Box cursor={"pointer"} onClick={() => navigate("/dress")}>
            <Image
              boxSize={{ base: "70px", lg: "100px" }}
              p={4}
              objectFit={"contain"}
              src={dressIcon}
              m={"auto"}
            />
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={["12px", "12px", "20px"]}
            >
              Giày dép
            </Text>
          </Box>

          {/* Phụ kiện */}
          <Box cursor={"pointer"} onClick={() => navigate("/accessory")}>
            <Image
              boxSize={{ base: "70px", lg: "100px" }}
              p={4}
              objectFit={"contain"}
              src={earringIcon}
              m={"auto"}
            />
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={["12px", "12px", "20px"]}
            >
              Phụ kiện
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
