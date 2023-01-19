import React, { useState } from 'react';
import "./cart.css"



function CartPage() {
  const [items, setItems] = useState([]);

  const [cartItems, setCartItems] = useState([
    { id: 1,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 1', price: 9.99 },
    { id: 2,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 2', price: 19.99 },
    { id: 3,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 3', price: 29.99 },
    { id: 4,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 4', price: 9.99 },
    { id: 5,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 5', price: 19.99 },
    { id: 6,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 6', price: 29.99 },
    { id: 7,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 7', price: 9.99 },
    { id: 8,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 8', price: 19.99 },
    { id: 9,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 9', price: 29.99 },
    { id: 10,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 10', price: 29.99 },
    { id: 11,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 11', price: 9.99 },
    { id: 12,image : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191167xltoppicksnipex.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}", name: 'Item 12', price: 19.99 },
    
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
      <h1>Cart</h1>
      <div>
        {
            items.length > 0 ? <h1>Cart data</h1> : <h4>Your cart is empty</h4>
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
      <button className='continueShoppingButton'>CONTINUE SHOPPING</button>

    </div>
    </div>
  );
}

export default CartPage;