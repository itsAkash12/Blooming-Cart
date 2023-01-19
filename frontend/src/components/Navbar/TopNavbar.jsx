import React from 'react'
import { Box, Image} from "@chakra-ui/react";
import { Brand_Images } from "../../assets/Data";
import "../../styles/navbar.css";
const BG_COLOR = process.env.REACT_APP_BG_COLOR;

const TopNavbar = () => {
  return (
    <Box className='top_navbar_parent'>
        <Box w="100%" className="div_one_container" h="25px" bg={BG_COLOR}>
        //text
      </Box>
      <Box className="div_two_container">
        {Brand_Images.map((el) => (
          <Box className="div_two_container_brands">
            <Image width="80%" src={el.img} alt={el.img} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TopNavbar