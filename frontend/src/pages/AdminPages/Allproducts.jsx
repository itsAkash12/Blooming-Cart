import {
  Box,
  Heading,
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
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";

const Allproducts = () => {
  const [data, setData] = useState();

  const handleData = async () => {
    try {
      let res = await fetch("http://localhost:8080/admin/products");
      let result = await res.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleClick = async (id) => {
    try {
      let res = await fetch(`http://localhost:8080/admin/products/${id}`, {
        method: "DELETE",
      });
      console.log("deleted sucessfully");
      handleData();
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <Box>
      <Box className="admin_parent">
        <Box className="admin_container">
          <Box>
            <Sidebar />
          </Box>
          <Box className="allusers_container">
            <Box  bg="#000000" m="20px auto">
              <Heading p="10px 0px" color={"white"}>Product Page</Heading>
            </Box>
            <TableContainer>
              <Table size="sm" variant="simple" colorScheme="purple">
                <TableCaption>All the Users Data is Present Here</TableCaption>
                <Thead colorScheme="red" fontWeight="bold">
                  <Tr>
                    <Th color="Black">Product ID</Th>
                    <Th color="Black">Product Name</Th>
                    <Th color="Black">Category</Th>
                    <Th color="Black">Price</Th>
                    <Th color="Black">Actions</Th>
                  </Tr>
                </Thead>
                {data &&
                  data.map((el, i) => (
                    <Tbody
                      bg={i % 2 === 0 ? "white" : "#E9D8FD"}
                      textAlign="left"
                    >
                      <Tr>
                        <Td>{el._id}</Td>
                        <Td>{el.productname}</Td>
                        <Td>{el.category}</Td>
                        <Td>{el.price}</Td>
                        <Td>
                          <Box display="flex" gap="30px">
                            <button>
                              <FontAwesomeIcon icon={faPen} />
                            </button>
                            <button onClick={() => handleClick(el._id)}>
                              <FontAwesomeIcon color="red" icon={faTrash} />
                            </button>
                          </Box>
                        </Td>
                      </Tr>
                    </Tbody>
                  ))}
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Allproducts;
