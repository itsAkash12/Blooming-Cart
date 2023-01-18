import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/Navbar/TopNavbar";
import Homepage from "../pages/Homepage";

export default function AllRoutes() {
  return (
    <Box>
      <TopNavbar />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </Box>
  );
}
