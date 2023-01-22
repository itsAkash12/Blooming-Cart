import React, { useEffect, useState } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import {  getCart } from '../../redux/action';

export const GetCart = () => {
    const [dummy, setdummy] = useState(false)
    const dispatch = useDispatch()
    const data1 = useSelector(store => store.cart)
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const handleChange = (value, id) => {

        axios.patch(`http://localhost:8080/carts/${id}`, {
            quantity: value,
        }, {
            headers: {
                'authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2E3NzMzYjIyMjlmMWM1YTAzZTRkNiIsInJvbGUiOiJFeHBsb3JlciIsImVtYWlsIjoic3JAZ21haWwuY29tIiwibmFtZSI6InJhaHVsIiwiaWF0IjoxNjc0MjEzMjA2fQ.BfAMpuadLZfdULOXvlXTDIyQPUL2dlg3DZmFB6-VypA"
            }
        }).then((res) => {
            // setCartItems(res.data)
            console.log(res)
        }).catch(err => console.log("err")).finally(() => {
            dispatch(getCart())
        })

    }



    useEffect(() => {
        dispatch(getCart())
    }, [])


    const deleteProduct = (id) => {
        setdummy(false)
        let token = localStorage.getItem("token")
        const response = axios.delete(`http://localhost:8080/carts/${id}`, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': token
            }
        })
        return response
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
    useEffect(() => {
        setdummy(true)
        dispatch(getCart())
        // handleDelete()

    }, [data1.length, dummy])

    return (
        <div>
            {
                typeof (data1) === "object" && data1.map((ele) => (
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
                                    <select onChange={(e) => handleChange(e.target.value, ele._id)}>
                                        {options.map((e) => <option value={e} selected={e === ele.quantity} id={e}>{e}</option>)}
                                    </select>
                                    <h1>SubTotal : {(ele.price * ele.quantity).toFixed(2)}</h1>
                                </div>
                                <div>
                                    <button
                                        className='buttonRemove' onClick={() => handleDelete(ele._id)} >
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
