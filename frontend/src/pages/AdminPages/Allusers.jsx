import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import "../../styles/adminpages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";

const Allusers = () => {
  const [data, setData] = useState();

  const handleData = async () => {
    try {
      let res = await fetch("http://localhost:8080/admin/users");
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
      let res = await fetch(`http://localhost:8080/admin/users/${id}`, {
        method: "DELETE",
      });
      console.log("deleted sucessfully");
      handleData();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Box className="admin_parent">
      <Box className="admin_container">
        <Box>
          <Sidebar />
        </Box>
        <Box className="allusers_container">
          <Box bg="#000000" m="20px auto">
            <Heading p="10px 0px" color={"white"}>Users Page</Heading>
          </Box>
          <TableContainer>
            <Table variant="simple" colorScheme="purple">
              <TableCaption>All the Products Data is Present Here</TableCaption>
              <Thead colorScheme="red" fontWeight="bold">
                <Tr>
                  <Th color="Black">User ID</Th>
                  <Th color="Black">Name</Th>
                  <Th color="Black">Email</Th>
                  <Th color="Black">Actions</Th>
                </Tr>
              </Thead>
              {data &&
                data.map((el, i) => (
                  <Tbody
                    key={el._id}
                    bg={i % 2 === 0 ? "white" : "#E9D8FD"}
                    textAlign="left"
                  >
                    <Tr>
                      <Td>{el._id}</Td>
                      <Td>{el.name}</Td>
                      <Td>{el.email}</Td>
                      <Td>
                        <Box display="flex" gap="30px">
                          <button>
                            <FontAwesomeIcon icon={faUserPen} />
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
  );
};

export default Allusers;
