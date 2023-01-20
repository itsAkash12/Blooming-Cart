import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  return (
    <Box className="admin_parent">
      <Box className="admin_container">
        <Box>
          <Sidebar />
        </Box>
        <Box className="allusers_container">
          <TableContainer>
            <Table variant="striped" colorScheme="purple">
              <TableCaption>All the Order Data is Present Here</TableCaption>
              <Thead colorScheme="red" fontWeight="bold">
                <Tr>
                  <Th color="Black">Order ID</Th>
                  <Th color="Black">Status</Th>
                  <Th color="Black">Quantity</Th>
                  <Th color="Black">Amount</Th>
                  <Th color="Black">Actions</Th>
                </Tr>
              </Thead>
              <Tbody textAlign="left">
                <Tr>
                  <Td>2345678923456793456789</Td>
                  <Td>Shipped</Td>
                  <Td>2</Td>
                  <Td>179</Td>
                  <Td>
                    <Box display="flex" gap="30px">
                      <button>
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      <button>
                        <FontAwesomeIcon color="red" icon={faTrash} />
                      </button>
                    </Box>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Order;