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
import { GetCart } from './GetCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/action';
export const ShopingCart = () => {
    const [expnad, setExpand] = useState(false);
    const navigate = useNavigate()


    
    useEffect(() => {
        axios.get("http://localhost:8080/carts").then(res => console.log(res.data)).catch(err => console.log("err"))
    }, [])


    const data = useSelector(store=> store.cart)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCart())
    },[data.length])

    let total = 0
    for(let i = 0; i < data.length;i++){

        total = total + +(data[i].price)
    }
    console.log(total)
    
   console.log("abc")
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

                    data.length > 0 && <GetCart />
                }
                </div>
                <div>


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
                                    <div className='accordionDiv'>
                                        <div>
                                            <h1>Merchandise:</h1>
                                            <h1>{total.toFixed(2)}</h1>
                                        </div>
                                        <div>
                                            <h1>Estimated Shipping:*</h1>
                                            <h1>$0.00</h1>
                                        </div>
                                        <div>
                                            <h1>Total before tax:</h1>
                                            <h1>{total.toFixed(2)}</h1>
                                        </div>
                                        <div>
                                            <h1>Taxes:</h1>
                                            <h1>$0.00</h1>
                                        </div>

                                    </div>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                </div>
            </div>
        </div>
    )
}
