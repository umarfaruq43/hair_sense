import {
    Box,
    Divider,
    Flex,
    Icon,
    ListItem,
    OrderedList,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { FaTimes } from "react-icons/fa";

const Beauty_guide = () => {
    return (
        <Box>
            <Box
                mt={["59px", null, null, "60px"]}
                mb={["40px", null, null, "59px"]}
            >
                <Flex align="center" justify="space-between" w="100%">
                    <Text
                        fontSize={{ base: "16px", md: "20px", xl: "30px" }}
                        fontWeight="600"
                        color="accent_2"
                    >
                        Beauty Guide
                    </Text>
                    <Icon as={FaTimes} />
                </Flex>
                <Divider mt="10px" />
            </Box>
            <Box>
                <Box mt="30px">
                    <Box>
                        <Text
                            fontSize={["0.87rem", null, "1rem"]}
                            fontWeight={"600"}
                        >
                            Beauty_guide Information:
                        </Text>
                        <OrderedList
                            fontSize={["0.87rem", null, "1rem"]}
                            mt="1.3rem"
                            lineHeight={"1.95313rem"}
                        >
                            <ListItem>
                                Beauty_guide Methods: Explore our various
                                Beauty_guide methods to find the one that suits
                                your needs best.
                            </ListItem>
                            <ListItem>
                                Beauty_guide Costs: Learn about our Beauty_guide
                                rates and fees for different destinations.
                            </ListItem>
                            <ListItem>
                                Estimated Delivery Time: Find out how long it
                                typically takes for your orders to reach you.
                            </ListItem>
                            <ListItem>
                                Tracking Orders: Easily track the status of your
                                package with our tracking system.
                            </ListItem>
                            <ListItem>
                                International Beauty_guide: We offer
                                international Beauty_guide services to deliver
                                products worldwide.
                            </ListItem>
                        </OrderedList>
                    </Box>

                    <Box mt="1.8rem">
                        <Text
                            fontSize={["0.87rem", null, "1rem"]}
                            fontWeight={"600"}
                        >
                            Payment Information:
                        </Text>
                        <OrderedList
                            fontSize={["0.87rem", null, "1rem"]}
                            mt="1.3rem"
                            lineHeight={"1.95313rem"}
                        >
                            <ListItem>
                                Secure Payment Options: Choose from a range of
                                secure payment methods to complete your
                                purchase.
                            </ListItem>
                            <ListItem>
                                Credit/Debit Cards: We accept major credit and
                                debit cards, including Visa, Mastercard, and
                                American Express.
                            </ListItem>
                            <ListItem>
                                Payment Security: Rest assured that your payment
                                information is protected through encrypted
                                transactions.
                            </ListItem>
                            <ListItem>
                                Refund Policy: Familiarize yourself with our
                                refund policy in case you need to return or
                                exchange a product.
                            </ListItem>
                        </OrderedList>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Beauty_guide;
