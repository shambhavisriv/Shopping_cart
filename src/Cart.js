import React from 'react';
import CartItems from './CartItems';
const  Cart =(props) => {
   

    const { Products } = props;
    return (
        <div className = "cart">
           
        {Products.map((product) => {
              return( 
                <CartItems
                 product=  {product} 
                 key ={product.id} 
                 // eslint-disable-next-line no-undef
                 onIncreaseQuantity = {props.onIncreaseQuantity}
                 // eslint-disable-next-line no-undef
                 onDecreaseQuantity = {props.onDecreaseQuantity}
                 // eslint-disable-next-line no-undef
                 onDeleteproduct = {props.onDeleteproduct }
                  />
  
        )
                
    
               //   func = {() =>console.log()
                //  isLoggedin = {false}
        
                              

        })} 
           
            </div>

    );

}

       

export default Cart ;