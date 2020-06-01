import React from 'react';

const  CartItems  =(props) =>{    
        
 const{price,title,qty}= props.product;
 const {product , onIncreaseQuantity, onDecreaseQuantity,onDeleteproduct} = props;
        return (
            
            <div className= "cart-item">
                 <div className= "left-block">
                     <img style= {styles.image} src = {product.img} alt =" loading"/>
                         </div>
                         <div className= "right-block">

                          <div style ={{fontStyle : 25}}>{title}</div>
                          <div style ={{color : '#777'}}>Rs: {price}</div>
                          <div style ={{color : '#777'}}>Qty:{qty}</div>
                             <div className = "cart-item-actions">
                                 {/*button*/}
                                 <img 
                                 alt = "increase" 
                                 className = "action-icons"  
                                 src = "https://image.flaticon.com/icons/svg/753/753317.svg"
                                 onClick ={() => onIncreaseQuantity(product)}
                                 />
                                 <img 
                                 alt = "decrease" 
                                 className = "action-icons"  
                                 src = "https://image.flaticon.com/icons/svg/753/753322.svg"
                                 onClick = {() => onDecreaseQuantity(product)}
                                 />
                                 <img alt = "delete" 
                                 className = "action-icons"  
                                 src = "https://image.flaticon.com/icons/svg/747/747854.svg"
                                 onClick = {() =>  onDeleteproduct(product.id)}
                                 />

                                 </div> 



                 </div>
                 </div>
                
        );
    }

const styles={
    image :{
        height: 110,
        width: 110,
        borderRadius : 4,
        background: "#ccc"

    }
}
export default CartItems;