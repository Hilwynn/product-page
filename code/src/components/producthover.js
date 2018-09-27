import React from "react"

class ListItem extends React.Component {
  render() {
    return (
      <li>{this.props.item.trim()}</li>
    )
  }
}

export default class ProductHover extends React.Component {
  makeArray(string) {
    const stringArray = string.split(".")
    return stringArray.filter(String)
  }
  render() {

    return (
      <div className="product-info info-hover">
        <h3>{this.props.name}</h3>
        <ul>
          {this.makeArray(this.props.description).map((item, index) =>
          <ListItem key={index} item={item} />
        )}
        </ul>
        
      </div>
    )
  }
}
