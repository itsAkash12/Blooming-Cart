import React from 'react'
import { useState,useEffect, useRef } from 'react';
import Indvidual from './Indvidual';
import axios from "axios";
import { Box } from '@chakra-ui/react';
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
        <Box w="90%" margin="auto" display={"flex"}>
          <Box w="50%" h="200px" border="1px solid red"></Box>
          <Box w="50%"  h="200px" border="1px solid yellow"></Box>
        </Box>
    </Box>
  )
}

export default Productdata