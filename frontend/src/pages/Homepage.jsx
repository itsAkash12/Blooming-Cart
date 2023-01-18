import { Box, Heading } from "@chakra-ui/react";
import {CartProvider} from "react-use-cart"

export default function Homepage() {
  return (
    <CartProvider>
    <Box className="container">
      <Heading> Hello team lets start !</Heading>
    </Box>
      </CartProvider>

  );
}
