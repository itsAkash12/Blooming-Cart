import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";

const Allusers = () => {
  return (
    <Box className="admin_parent">
      <Box className="admin_container">
        <Box>
          <Sidebar />
        </Box>
        <Box className="allusers_container">
          <TableContainer>
            <Table variant="striped" colorScheme="purple">
              <TableCaption>All the Products Data is Present Here</TableCaption>
              <Thead colorScheme="red" fontWeight="bold">
                <Tr>
                  <Th color="Black">User ID</Th>
                  <Th color="Black">Name</Th>
                  <Th color="Black">Email</Th>
                  <Th color="Black">Actions</Th>
                </Tr>
              </Thead>
              <Tbody textAlign="left">
                <Tr>
                  <Td>2345678923456793456789</Td>
                  <Td>Akash</Td>
                  <Td>Akash@gmail.com</Td>
                  <Td>
                    <Box display="flex" gap="30px">
                      <button>
                        <FontAwesomeIcon icon={faUserPen} />
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

export default Allusers;
