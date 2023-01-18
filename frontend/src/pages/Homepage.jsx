import { Box } from "@chakra-ui/react";
import SearchSection from "../components/landingPage/SearchSection";
import TopSection from "../components/landingPage/TopSection";
import {CartProvider} from "react-use-cart"

export default function Homepage() {
  return (
    <CartProvider>
    <Box className="container">
      <TopSection></TopSection>
      <SearchSection />
    </Box>
      </CartProvider>

  );
}
