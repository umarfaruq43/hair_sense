import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            {/* <Head>
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <title>Hair Sense</title>
                </Head> */}

            <Component {...pageProps} />
        </ChakraProvider>
    );
}