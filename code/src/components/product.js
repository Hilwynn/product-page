import React from "react"
import Button from "./button"
import ProductInfo from "./productinfo"
import ProductHover from "./producthover"

export default class Product extends React.Component {
  constructor () {
    super()
      this.state = {
        isHidden: true
      }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    return (
      <div className="product-box">
        <div className="product-card">
          <div className="product-info-hover-trigger" onMouseOver={() => this.toggleHidden(this)} onMouseLeave={() => this.toggleHidden(this)}></div>
          {this.state.isHidden && <ProductInfo image={this.props.image} name={this.props.name} numberInPack={this.props.numberInPack} price={this.props.price} size={this.props.size} type={this.props.type} substance={this.props.substance} />}
          {!this.state.isHidden && <ProductHover description={this.props.description} name={this.props.name} />}
          <div className="product-buy">
            <p>{this.props.price} kr</p>
            <Button action="Köp" name={this.props.name} />
            <div className="delivery-time">
              <p>Lev. {this.props.deliveryTime}</p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}
