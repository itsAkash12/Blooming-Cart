import React, { useEffect, useState } from 'react'
import "./cart.css"

import { DeleteIcon } from '@chakra-ui/icons'


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
import CartPage from './Cart';
import { faL } from '@fortawesome/free-solid-svg-icons';
export const ShopingCart = () => {
    const [expnad, setExpand] = useState(false);
    const navigate = useNavigate()
    
const [nav,setNav] = useState(false)


    // useEffect(() => {
    //     axios.get("http://localhost:8080/carts").then(res => console.log(res.data)).catch(err => console.log("err"))
    // }, [])


    const data = useSelector(store => store.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCart())
        // setNav(!nav)
        
        if(typeof(data)==="string"){
            // window.location.reload(false)
            // setExpand(true)
            // setNav(!nav)
        
            navigate("/cart")
            console.log("Hello")
            return 
        }
    }, [data.length])

    let total = 0
    for (let i = 0; i < data.length; i++) {

        total = total + +(data[i].price)
    }
    console.log(typeof(data))
   

    console.log("abc")
    const navigateToDel = () => {
        navigate("/delivery")
    }
    
// if(typeof(data)==="string"){
//     // window.location.reload(false)
//     // setExpand(true)
//     // setNav(!nav)

//     navigate("/cart")
//     console.log("Hello")
//     return 
// }

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
                    typeof(data)==="object" &&  <GetCart /> 
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
