import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
//import { render } from '@testing-library/react';

//import  CartItems  from './CartItems';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
    Products: [
        {
            price : 999,
            title : 'Mobile',
            qty : 1,
             img : 'https://images.unsplash.com/photo-1529653762956-b0a27278529c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
             id : 1
        },
        {
            price : 999,
            title : 'Watch',
            qty : 1,
             img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
             id :2


        },
        {
            price : 999,
            title : 'Laptop',
            qty : 1,
            img : 'https://images.unsplash.com/photo-1561517146-815245fcbfde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            id :3
        }
    ]
}
}
handleIncreaseQuantity = (product) => {
console.log("increase qty of",product);
const {Products} = this.state;
const index = Products.indexOf(product);
Products[index].qty += 1;
this.setState({
    Products : Products
})
}
handleDecreaseQuantity = (product) => {
console.log("decrease qty of",product);
const {Products} = this.state;
const index = Products.indexOf(product);
if(Products[index].qty === 0){
    return ;
}
Products[index].qty -= 1;
this.setState({
    Products : Products
})

}
handleDeleteproduct = (id) => {
const {Products} = this.state;
const items = Products.filter((item) => item.id !== id);
this.setState({
    Products : items
})


}
getCount = () => {
  const {Products} = this.state;
  let count =0;
  Products.forEach((product) => {
    count += product.qty;

  })
  return count;
}
getTotal = () =>{
  const {Products} = this.state;
  let cartTotal = 0;
  // eslint-disable-next-line array-callback-return
  Products.map((product) => {
    cartTotal = cartTotal + product.qty*product.price;
  })
  return cartTotal;
}





  render(){
    const {Products} = this.state;
  return (
    <div className="App">
     <Navbar count ={this.getCount()}/>
     
    
     <Cart
     Products = {Products}
     onIncreaseQuantity = {this.handleIncreaseQuantity}
     onDecreaseQuantity = {this.handleDecreaseQuantity}
     onDeleteproduct = {this.handleDeleteproduct}
     />
     <div style ={{padding:10 ,fontSize:10}}>TOTAL:{this.getTotal()}</div>
    </div>
  );
}
}

export default App;
