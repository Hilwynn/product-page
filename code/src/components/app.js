import React from "react"
import Product from "./product"
const productsJson = require("./../products.json")

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Produkter</h1>
          <h2>Antal produkter: {productsJson.products.length}</h2>
        </div>
        <div className="product-container">
          {productsJson.products.map(product =>
            <Product 
              key={product.id} 
              deliveryTime={product.deliveryTime} 
              description={product.description} 
              id={product.id} 
              image={product.image} 
              name={product.name} 
              numberInPack={product.numberInPack} 
              price={product.price} 
              size={product.size} 
              type={product.type} 
              substance={product.substance}  />
          )}
        </div>
      </div>
    )
  }

}

export default App
