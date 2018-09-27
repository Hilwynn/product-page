import React from "react"

export default class ProductInfo extends React.Component {
  render() {
    return (
      <div className="product-info">
        <h3>{this.props.name}</h3>
        <img 
          src={this.props.image}
          alt={this.props.name}
        />
        <ul>
          <li>{this.props.type}</li>
          <li>{this.props.substance}</li>
          <li>{this.props.size}</li>
          <li>{this.props.numberInPack} i förpackningen</li>
        </ul>
      </div>
    )
  }
}
