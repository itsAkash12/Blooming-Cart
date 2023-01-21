import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";

const Adding = () => {
  return (
    <Box className="admin_parent">
      <Box className="admin_container">
        <Box>
          <Sidebar />
        </Box>
      </Box>
      <Box bg="#000000" m="20px auto">
        <Heading p="10px 0px" color={"white"}>Dashboard</Heading>
      </Box>
    </Box>
  );
};

export default Adding;
