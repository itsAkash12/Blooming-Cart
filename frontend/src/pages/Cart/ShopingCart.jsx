import React, { useEffect, useState } from 'react'
import "./cart.css"

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
