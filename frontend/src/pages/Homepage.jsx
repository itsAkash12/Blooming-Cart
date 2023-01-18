import { Box } from "@chakra-ui/react";
import SearchSection from "../components/landingPage/SearchSection";
import TopSection from "../components/landingPage/TopSection";

export default function Homepage() {
  return (
    <Box className="container">
      <TopSection></TopSection>
      <SearchSection />
    </Box>
  );
}
