import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import "./cart.css"

import {ShopingCart} from "./ShopingCart"

function CartPage() {
  const [items, setItems] = useState([]);

const navigate = useNavigate()


const handleNavigate = ()=>{
  navigate("/")
}

  const [cartItems, setCartItems] = useState([
    { id: 1,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Floral Embrace', price: `$ ${49.99}- $ ${79.99}` },
    { id: 2,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191179xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}}", name: 'Wonderful Whishes Bouquet', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 3,image : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/161132lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Blooming Love', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 4,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90926mrdv4ch31x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Two Dozen Red Roses', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 5,image : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 5', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 6,image : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191113dxx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 6', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 7,image : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 7', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 8,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90577mprsv1sc9x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 8', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 9,image : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191248lx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 9', price: `$ ${49.99}- $ ${79.99}` },
    { id: 10,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/144754mpkcv2ws4x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 10', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 11,image : "https://cdn4.fruitbouquets.com/wcsstore/Flowers/images/catalog/192815mbv24bdmx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 11', price: `$ ${49.99}- $ ${79.99}`  },
    { id: 12,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/179095x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 12', price: `$ ${49.99}- $ ${79.99}`  },
    
  ]);



//   const addToCart = (item) => {
//     setItems([...items, item]);
//   }

//   const removeFromCart = (item) => {
//     setItems(items.filter((i) => i !== item));
//   }

  return (
    <div>

    <div className='maindivEmtyCartDataBelow1'>
      <div>
        {
            items.length > 0 ? <ShopingCart/>: <h4>Your cart is empty</h4>
        }
      </div>
      <div className='empty'></div>
      {
        items.length === 0 && <div>
          <div >
            <h2>Best Sellers</h2>
            <div className='maindivEmtyCartDataBelow'>
              {
                  cartItems.map((ele)=>(
                      <div key={ele.id} className="emtyCartDataBelow">
                          <img className='image' src={ele.image} alt="flower" />
                          <h1 className='name'>{ele.name}</h1>
                          <p className='price'>{ele.price}</p>

                      </div>
                  ))
              }
            </div>
          </div>
        </div>
      }
    </div>
    <div className='buttonDiv'>
      <button className='continueShoppingButton' onClick={handleNavigate}>CONTINUE SHOPPING</button>

    </div>
    </div>
  );
}

export default CartPage;