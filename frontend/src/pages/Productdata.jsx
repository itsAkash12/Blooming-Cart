import React from 'react'
import { useState,useEffect, useRef } from 'react';
import Indvidual from './Indvidual';
import axios from "axios";
import { Box,Image,Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const Productdata = () => {
  const {id}=useParams();
  console.log("param",id)
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
      console.log(data)
  return (
    <Box>
        <Box w="90%"  margin="auto" gap="10%" marginTop="50px" display={"flex"}>
          <Box w="40%" h="auto" >
            <Image w="100%" src={data.image}></Image>
          </Box>
          <Box w="55%"  h="auto" >
            <Text textAlign="left" fontSize="25px" fontWeight="semibold">{data.productname}</Text>
          </Box>
        </Box>
    </Box>
  )
}

export default Productdata