import React from 'react'
import { Box, Text, Image, Button, Stack ,Wrap,SimpleGrid} from "@chakra-ui/react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Indvidual = () => {
  const pro = [
    {
      name:"aniversery flower pot",
        images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
    {
      name:"The Luxury Trio by Magnificent Roses®",
        images:["https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191112xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
    {
      name:"aniversery flower pot",
        images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
    {
      name:"aniversery flower pot",
        images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
    {
      name:"aniversery flower pot",
        images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
    {
      name:"aniversery flower pot",
        images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
    {
      name:"aniversery flower pot",
        images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
    {
      name:"aniversery flower pot",
        images:["https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt29d030cbcfd4ab4e/61ce05c18ae3ee7d4c156b19/classic-all-white-arrangement-sympathy-95097-silo-260x284.jpeg?quality=75&auto=webp&optimize={medium}",
        "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191165sx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}"],
        short_desc:"Deliciously Decadent™ Red Roses & Drizzled Strawberries",
        long_desc:"",
        price:900,
        strike_price:1200,
        ratings:4.9,
        colors:"red",
        delivery_time:"2-3days",
        sizes:"xl"
    },
  ]
  const handleCart=()=>{

  }
  return (
    <div>
       <Text textAlign="center" fontSize="21px" textDecoration="underline 2px #088DF5" fontWeight="semibold" margin="15px">Individual item</Text>
            
            <Wrap justify="center">
            

                <SimpleGrid w="90%" spacing={3} columns={[2, 4]} >
                    {
                        pro && pro.map((el,i)=>(
                            <Box  w="100%" textAlign="center">
                                <Box w="75%" m="auto">
                                <Image w="100%" src={el.images}></Image>
                                </Box> 
                                <Box  fontSize={["15px","16px","16px"]}  fontWeight="semibold" h={["41px","46px","48px"]} overflow="hidden">
                                <Text p="0px 7px" >{el.name}</Text>
                                </Box>
                                <Box w="39%" display={"flex"} gap="5px" margin="auto" alignItems="center" justifyContent="center">
                                  <Text fontSize="17px">{el.ratings}</Text>
                                    <Image w="100%" src="https://static.vecteezy.com/system/resources/previews/004/256/658/original/five-star-customer-product-ratings-review-flat-icons-for-apps-and-websites-illustration-of-five-golden-yellow-stars-in-a-row-isolated-in-a-white-background-concepts-for-ratings-customers-review-free-vector.jpg"></Image>
                                    </Box>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                    <Text color="blue"  fontSize="17px">  ₹ {el.price} /-</Text>
                                    <Text as="s" m="3px 4px" fontSize="14px"> ₹ {el.strike_price}/-</Text>
                                    </Box>
                                <Box display="flex" m="auto" alignItems="center" justifyContent="center">
                                
                                <Button onClick={()=>handleCart(el._id)} backgroundColor={process.env.REACT_APP_BG_COLOR} mr="5px"  size='sm'>
                                    Add to Cart
                                </Button>
                                <Button  color={process.env.REACT_APP_BG_COLOR} size='sm'>
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