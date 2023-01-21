import React from 'react'
import { useState,useEffect, useRef } from 'react';
import Indvidual from './Indvidual';
import axios from "axios";
import { Box,Image,Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const Productdata = () => {
  const {id}=useParams();
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/products/${id}`,{
          headers: {
            'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"
        }
        })
        .then((res)=>setData(res.data))
        .catch((er)=>console.log(er))
      },[])
  return (
    <Box mb="100px">
        <Box w="90%"  margin="auto" gap="10%" marginTop="50px" display={"flex"}>
          <Box w="53%" h="auto" border="1px solid red" display="flex" >
            <Box w="32%" h="100px" border="1px solid yellow">
            <Box   border="1px solid teal">
              <Image src={ data.multi_image ? data.multi_image[0] : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/104518alt_viewc.jpg?width=100&height=110&quality=90&auto=webp&optimize={medium}" }></Image>
            </Box>
            <Box   border="1px solid teal">
            <Image w="90%" src={ data.multi_image && data.multi_image[1]} ></Image>
            </Box>
            </Box>
            <Box  border="1px solid teal">
            <Image w="100%" src={data.image}></Image>
            </Box>
            
          </Box>
          <Box w="49%"  h="auto" >
            <Text textAlign="left" fontSize="25px" fontWeight="semibold">{data.productname}</Text>
          </Box>
        </Box>
    </Box>
  )
}

export default Productdata