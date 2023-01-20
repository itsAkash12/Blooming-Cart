import React, { useEffect, useState } from 'react'
import "./cart.css"
import {  DeleteIcon} from '@chakra-ui/icons'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
export const ShopingCart = () => {
    const [selectedValue, setSelectedValue] = useState(1);
    const [expnad, setExpand] = useState(false);
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([
        { id: 1, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 1', price: 9.99 },
        { id: 2, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 2', price: 19.99 },
        { id: 3, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 3', price: 29.99 },
        { id: 4, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 4', price: 9.99 },
        { id: 5, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 5', price: 19.99 },
        { id: 6, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 6', price: 29.99 },
        { id: 7, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 7', price: 9.99 },
        { id: 8, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 8', price: 19.99 },
        { id: 9, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 9', price: 29.99 },
        { id: 10, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 10', price: 29.99 },
        { id: 11, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 11', price: 9.99 },
        { id: 12, img: "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 12', price: 19.99 },

    ]);
    useEffect(()=>{
        axios.get("http://localhost:8080/carts").then(res=>console.log(res.data)).catch(err=>console.log("err"))
      })
    
    useEffect(() => {
        axios.get("http://localhost:8080/carts").then(res => console.log(res.data)).catch(err => console.log("err"))
    }, [])



    const handleChange = (e) => {
        setSelectedValue(+(e.target.value));
    }

    const handleDelete = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    }
    const navigateToDel = ()=>{
        navigate("/delivery")
    }
    return (
        <div className='shopingcartmain1'>
            <div>
                <h1 className='shopCart'>Shopping Cart</h1>
            </div>
            <div>
                <button className='continueShoppingButton' onClick={navigateToDel}>Proceed to checkout</button>
            </div>
            <div>
                {
                    cartItems.length > 0 && cartItems.map((ele) => (
                        <div className='productCard productsdiv'>
                            <h1>Item {ele.id} of {cartItems.length}:</h1>
                            <hr />
                            <div className='prodcart'>
                                <img src={ele.image} alt="img" />
                                <div className='productItem'>
                                    <div>
                                        <h4>{ele.name}</h4>
                                        <h4>Sold By The Market</h4>
                                        <h4>${ele.price}</h4>
                                        <label>Oty</label>
                                        <select onChange={handleChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                        <h1>SubTotal : {ele.price * selectedValue}</h1>
                                    </div>
                                    <div>
                                        <button className='buttonRemove' onClick={() => handleDelete(ele.id)}>
                                            <DeleteIcon/>

                                            <DeleteIcon />
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>

                <div className='orderSummary'>
                    <h3>Order summary</h3>
                    <p>{cartItems.length}   Items</p>
                    <div className='accordion'>
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton >
                                        <Box as="span" flex='1' textAlign='left' border="none">
                                            Expand
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}
