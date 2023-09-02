import React, {Component} from "react";
import axios from 'axios';
import Card from "./components/Card";
                              



class products extends Component {

  constructor(props) {
       super(props)
       this.state = {
              products: []
      }
   }

   componentDidMount() {
       axios.get("https://fakestoreapi.com/products")
       .then(response => this.setState({
          products: response.data,
       }))
   }


  render() {
     const {products } = this.state
     return (
      <div>
        
        <div >
             {
               products.length ?
               products.map(product => <Card key={product.id} image={product.image} cost={`${product.price} $`}/>) :
               <h1>loading...</h1>
             }
             {products.map(product => <Card key={product.id} image={product.image} cost={`${product.price} $`}/>)}
        </div>
        
      </div>
     ); 

   
  }
}


export default products;