import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import "../../styles/homepage.css";
import { Categories_Data } from "../../assets/Data";

const SearchSection = () => {
  return (
    <Box className="search_section_parent">
      <Box className="search_section_container">
        <Text>FIND THE PERFECT GIFT</Text>
        <Box>
          <Input placeholder="Zip Code" color="black" bg="white"></Input>
        </Box>
        <Box>
          <Select fontSize={['xs', 'sm', 'md', 'lg']} colorScheme="red" color="black" bg="white" placeholder="Categories">
            {Categories_Data.map((el) => (
              <option key={el.category} value={el.category}>{el.category}</option>
            ))}
          </Select>
        </Box>
        <Box>
          <Input
            placeholder="Select Date and Time"
            type="date"
            color="black"
            bg="white"
          />
        </Box>
        <Box>
          <Button bg="green" colorScheme="whatsapp">Find a Gift Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchSection;
