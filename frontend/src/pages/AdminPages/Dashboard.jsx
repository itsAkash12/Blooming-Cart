import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";

const Dashboard = () => {
  return (
    <Box className="admin_parent">
      <Box className="admin_container">
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Box>
            <Box bg="twitter.500" className="detail1_container" >
              <Text>Total Amount</Text>
              <Text>20000</Text>
            </Box>
            <Box className="detail2_container" >
              <Box bg="yellow.400">
                <Text>Products</Text>
                <Text>20</Text>
              </Box>
              <Box bg="red.500">
                <Text>Orders</Text>
                <Text>5</Text>
              </Box>
              <Box bg="teal.400">
                <Text>Users</Text>
                <Text>6</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
