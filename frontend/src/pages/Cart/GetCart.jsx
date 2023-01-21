import React, { useEffect, useState } from 'react'
import { DeleteIcon, DragHandleIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { ShopingCart } from './ShopingCart';
import { useSelector, useDispatch } from "react-redux"
import { deleteItem, getCart } from '../../redux/action';

export const GetCart = () => {

    // const [cartItems, setCartItems] = useState(data);
    // let newData = data.data
    // const [total , setTotal] = useState(0)
    // const handleDelete = async(id) => {
    //     const variable = localStorage.getItem("token")
    //     try {
    //         await axios.delete(`http://localhost:8080/carts/${id}`,{
    //             headers: {
    //                 'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"

    //             }
    //         });
    //       } catch (error) {
    //         console.log("err")
    //       }
    // }
    // let sum = 0
    // for(let i = 0; i < newData.length;i++){
    //     let price = Number(price)
    //     sum = sum + +(newData[i].price)
    // }

    // console.log(cartItems)
    // const handleChange = (e) => {
    //     let {payload} = e.target.value
    //     axios.patch("http://localhost:8080/carts",{

    //         headers: {
    //             'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"

    //         }
    //     }).then((res) =>{
    //         setCartItems(res.data)
    //         console.log(cartItems)
    //     }).catch(err => console.log("err"))
    //     setSelectedValue(+(e.target.value));
    // }

    const [qty, setQty] = useState({})
    const navigate = useNavigate()
    const handleChange = (e) => {
        console.log(e.target.value)
        setQty({ ...data1, quantity: e.target.value })
        axios.patch(`http://localhost:8080/carts`, {
            quantity: e.target.value,
            headers: {
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"

            }
        }).then((res) => {
            // setCartItems(res.data)
            console.log(res)
        }).catch(err => console.log("err"))

    }

    const data1 = useSelector(store => store.cart)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCart())
    }, [])

    const [dummy , setdummy] = useState(false)

    const deleteProduct = (id) => {
       setdummy(false)
        const response = axios.delete(`http://localhost:8080/carts/${id}`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"
            }
        })
        
        return response
        // console.log(response.data)
        // console.log(id)
        
    }
    

    const handleDelete = (id) => {
        setdummy(false)
        console.log(id)
        deleteProduct(id)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(()=>{
        setdummy(true)
        dispatch(getCart())
        // handleDelete()

    },[data1.length,dummy])

if(data1.length===0){
    navigate("/cart")
    return
}


    return (
        <div>
            {
                data1.length > 0 && data1.map((ele) => (
                    <div className='productCard productsdiv' key={ele._id}>
                        <h1>Item {data1.indexOf(ele) + 1} of {data1.length}:</h1>
                        <hr />
                        <div className='prodcart'>
                            <img src={ele.image} alt="img" />
                            <div className='productItem'>
                                <div>
                                    <h4>{ele.productname}</h4>
                                    <h4>Sold By The Market</h4>
                                    <h4>${ele.price}</h4>
                                    <label>Oty</label>
                                    <select value={ele.quantity} onChange={handleChange}>
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
                                    <h1>SubTotal : {ele.price * ele.quantity}</h1>
                                </div>
                                <div>
                                    <button
                                        className='buttonRemove' onClick={()=>handleDelete(ele._id)} >
                                        <DeleteIcon />
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
