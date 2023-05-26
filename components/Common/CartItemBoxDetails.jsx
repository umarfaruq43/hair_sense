import {
    Box,
    Flex,
    Button,
    Divider,
    Icon,
    Text,
    Image,
} from "@chakra-ui/react";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CartItemBoxDetails = ({ singleItem }) => {
    const { id, name, actual_price, sales_price, product_img, quantity } =
        singleItem;
    return (
        <Flex
            mt="30px"
            flexWrap={{ base: "wrap", md: "nowrap", xl: "" }}
            gap="30px"
            align={{ base: "auto", md: "center", xl: "" }}
        >
            <Icon
                as={IoIosCloseCircleOutline}
                boxSize={{ base: "21px", md: "27px" }}
                
            />
            {/* product Image */}

            <Image
                src={product_img && product_img}
                maxW={{ base: "188px", md: "115px" }}
                maxH={{ base: "188px", md: "115px" }}
                alt=""
                display={"block"}
                mx="auto"
            />

            {/* Product Name */}
            <Box w={["100%", "80%"]}>
                <Text
                    fontSize={{ base: "15px", md: "10px", xl: "17px" }}
                    fontWeight="600"
                >
                    Product
                </Text>
                <Text
                    fontSize={{ base: "16px", md: "15px", xl: "24px" }}
                    pt={{
                        base: "13px",
                        sm: "20px",
                        md: "20px",
                        lg: "29px",
                    }}
                    fontWeight="600"
                    flexShrink={0}
                    noOfLines={3}
                >
                    {name && name}
                </Text>
            </Box>

            {/* New Box */}

            <Flex
                w="100%"
                flexDir={{ base: "column", md: "row", xl: "" }}
                gap={{ base: "18px", md: "20px", xl: "" }}
                // align="center"
                justify="space-between"
            >
                {/* Price Section  */}
                <Flex
                    w="100%"
                    flexDir={{ base: "row", md: "column", xl: "" }}
                    gap={{ base: "13px", md: "20px", lg: "29px" }}
                    justify="space-between"
                    order={{ base: "2", md: "1", xl: "" }}
                >
                    <Text
                        fontSize={{ base: "15px", md: "10px", xl: "17px" }}
                        fontWeight="600"
                    >
                        Price
                    </Text>
                    <Text
                        fontSize={{ base: "16px", md: "14px", xl: "24px" }}
                        fontWeight={600}
                    >
                        ₦ {sales_price}
                    </Text>
                </Flex>
                {/* Quantity Section */}
                <Flex
                    order={{ base: "1", md: "2", xl: "" }}
                    w="100%"
                    flexDir={{ base: "row", md: "column", xl: "" }}
                    gap={{ base: "13px", md: "20px", lg: "29px" }}
                    justify="space-between"
                >
                    <Text
                        fontSize={{ base: "15px", md: "10px", xl: "17px" }}
                        fontWeight="600"
                    >
                        Quantity
                    </Text>
                    <Flex
                        align="center"
                        gap={{ base: "12px", md: "22px", xl: "" }}
                    >
                        <Text
                            as="button"
                            aria-label="minus from quantity"
                            boxSize={{
                                base: "30px",
                                md: "23px",
                                xl: "39px",
                            }}
                            bgColor="accent_8"
                            color="white"
                            rounded={"3px"}
                            minW="30px"
                        >
                            {" "}
                            -{" "}
                        </Text>
                        <Flex
                            minW="32px"
                            align="center"
                            justify="center"
                            fontSize={{
                                base: "13px",
                                sm: "15px",
                                md: "13px",
                                xl: "22px",
                            }}
                        >
                            {quantity}
                        </Flex>
                        <Text
                            as="button"
                            aria-label="Add to quantity"
                            boxSize={{
                                base: "30px",
                                md: "23px",
                                xl: "39px",
                            }}
                            bgColor="accent_8"
                            color="white"
                            rounded={"3px"}
                        >
                            {" "}
                            +{" "}
                        </Text>
                    </Flex>
                </Flex>

                {/* SubTotal */}
                <Flex
                    order="3"
                    w="100%"
                    flexDir={{ base: "row", md: "column", xl: "" }}
                    gap={{ base: "13px", md: "20px", lg: "29px" }}
                    justify="space-between"
                >
                    <Text
                        fontSize={{ base: "15px", md: "10px", xl: "17px" }}
                        fontWeight="600"
                    >
                        Subtotal
                    </Text>
                    <Text
                        fontSize={{ base: "16px", md: "14px", xl: "24px" }}
                        fontWeight={600}
                    >
                        ₦ 4,000
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CartItemBoxDetails;
