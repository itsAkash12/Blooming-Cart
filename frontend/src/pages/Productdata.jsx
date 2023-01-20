import React from 'react'
import { useState,useEffect, useRef } from 'react';
import Indvidual from './Indvidual';
import axios from "axios";
import { Box, HStack } from '@chakra-ui/react';

const Productdata = (id) => {
  console.log(id)
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/products?category=birthday")
        .then((res)=>setData(res.data))
        .catch((er)=>console.log(er))
      },[])
      console.log(data)
  return (
    <Box>
        {
          data && data.map((el)=>( 
            <Indvidual key={el._id} id={el._id} img={el.image} desc={el.description} 
            size={el.size} name={el.product_name} del={el.delivery_time}></Indvidual> 
          ))
        }
    </Box>
  )
}

export default Productdata