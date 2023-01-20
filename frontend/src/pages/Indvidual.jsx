import React from 'react'
import {
  Box, Text, Image, Button, Stack, Wrap, SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalCloseButton, useDisclosure
} from "@chakra-ui/react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router-dom';

import axios from "axios";
import { useNavigate } from 'react-router';


const Indvidual = () => {
  const {url}=useParams();
  let navigate = useNavigate();
  const [data, setData] = useState([]);




  const handleCart = (el) => {
    const post = {
      image: el.image,
      productname: el.productname,
      price: el.price,
      size: el.size,
      category: el.category
    }
    //console.log("post",post)
    axios.post("http://localhost:8080/carts/",post,{
      headers: {
        'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"
    }
    })
    .then((res)=>console.log(res))
    .catch((er)=>console.log(er))

  }

  const handleshow = (id) => {
    console.log(id)
    navigate(`/${id}`)

  }

  useEffect(() => {
    axios.get(`http://localhost:8080/products?category=${url}`)
      .then((res) => setData(res.data))
      .catch((er) => console.log(er))
  }, [])
  console.log(data)

  return (
    <div>
      <Text textAlign="center" fontSize="21px" textDecoration="underline 2px #088DF5" fontWeight="semibold" margin="15px">Individual item</Text>
      <Wrap justify="center">
        <SimpleGrid w="90%" spacing={3} columns={[2, 4]} >
          {
            data && data.map((el) => (
              <Box key={el._id} w="100%" textAlign="center">
                <Box onClick={() => handleshow(el._id)} cursor={"pointer"} w="75%" m="auto">
                  <Image w="100%" src={el.image}></Image>
                </Box>
                <Box fontSize={["15px", "16px", "16px"]} fontWeight="semibold" h={["41px", "46px", "48px"]} overflow="hidden">
                  <Text p="3px 7px" >{el.productname}</Text>
                </Box>
                <Box w="39%" display={"flex"} gap="5px" margin="auto" alignItems="center" justifyContent="center">
                  <Text fontSize="17px">{el.ratings}</Text>
                  <Image w="100%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Text color="blue" fontSize="17px">  $ {el.price} /-</Text>
                  <Text as="s" m="3px 4px" fontSize="14px"> $ {Math.floor(el.strike_price * 5)}/-</Text>
                </Box>
                <Box display="flex" m="auto" alignItems="center" justifyContent="center">

                  <Button onClick={() => handleCart(el)} backgroundColor={process.env.REACT_APP_BG_COLOR} mr="5px" size='sm'>
                    Add to Cart
                  </Button>
                  <Button color={process.env.REACT_APP_BG_COLOR} size='sm'>
                    <IoIosHeart size="24px" ></IoIosHeart>
                  </Button>
                </Box>
              </Box>
            ))
          }

        </SimpleGrid>
      </Wrap>
    </div>
  )
}

export default Indvidual