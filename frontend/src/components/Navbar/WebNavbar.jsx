import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "../../styles/navbar.css";
import logo from "../../assets/images/Blooming Cart.png";
import avatar from "../../assets/images/icons8-customer.gif";
import cart from "../../assets/images/icons8-shopping-cart.gif";
import orders from "../../assets/images/icons8-truck.gif";
import { Categories_Data } from "../../assets/Data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const WebNavbar = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <Box position="sticky" top="0" className="stickyNavbar">
      <Box className="div_three_container">
        <Box className="div_three_container_logo">
          <Image src={logo} alt="logo_of_website" />
        </Box>
        <Box className="div_three_container_input-group">
          <input
            type="text"
            className="div_three_container_input"
            id="Email"
            name="title"
            placeholder="Enter Title or Keyword"
            autoComplete="off"
          />
          <input
            className="div_three_container_button--submit"
            value="SEARCH"
            type="submit"
          />
        </Box>
        <Box className="div_three_container_Avtar">
          <Link>
            <Image src={avatar} alt="avatar" />
            <Text fontSize="xs" fontWeight="bold">
              Login
            </Text>
          </Link>
        </Box>
        <Box className="div_three_container_Avtar">
          <Link>
            <Image src={orders} alt="orders" />
            <Text fontSize="xs" fontWeight="bold">
              My Orders
            </Text>
          </Link>
        </Box>
        <Box className="div_three_container_Avtar">
          <Link>
            <Image src={cart} alt="cart" />
            <Text fontSize="12px" fontWeight="bold">
              Cart
            </Text>
          </Link>
        </Box>
      </Box>
      <Box className="div_four_container">
        {Categories_Data.map((el) => (
          <Link key={el.category}>
            <Text>{el.category}</Text>
          </Link>
        ))}
      </Box>
      <Box className="div_five_container">
        <Box className="div_five_container_progress">
          <Box w={`${scrollTop}%`} className="div_five_container_style"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WebNavbar;
