import { ProductSlider } from "@/components/Common";
import ProductBox from "@/components/Common/ProductBox";
import { whatsNew } from "@/utils/dummyData";
import {
    Box,
    CloseButton,
    Divider,
    Flex,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";

const Favourite = () => {
    return (
        <Box pt={["40px", null, "40px"]}>
            <Box>
                <Flex justify="space-between" align="center">
                    <Text
                        color="accent_2"
                        fontSize={["16px", null, "25px", null, "40px"]}
                        mb="12px"
                        fontWeight={600}
                        textTransform={"capitalize"}
                    >
                        Favourite
                    </Text>

                    <CloseButton _hover={{}} />
                </Flex>
                <Divider />
                {/* Favourite List  */}
                <Box mt={["30px", null, "40px", "50px"]}>
                    <SimpleGrid
                        columns={[2, 3, 4]}
                        spacingY={["30px", null, "50px"]}
                    >
                        {whatsNew.slice(0, 1).map((item, i) => {
                            return (
                                <ProductBox
                                    isLiked="true"
                                    productData={item}
                                    key={i}
                                />
                            );
                        })}
                    </SimpleGrid>
                </Box>

                {/* Clients Also Bought */}
                <Box>
                    <ProductSlider
                        section="Clients Also Bought"
                        type="other"
                        productDatas={whatsNew}
                    />
                </Box>

                {/* Related Products */}
                <Box>
                    <ProductSlider
                        section="Related Product"
                        type="other"
                        productDatas={whatsNew}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Favourite;
