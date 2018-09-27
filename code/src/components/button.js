import React from "react"

export default class Button extends React.Component {
  
  addToCart(clickedItem) {
    console.log(`La till ${clickedItem.name} i kundvagnen.`)
  }
  
  render() {
    return(
      <button onClick={() => this.addToCart(this.props)}>{this.props.action}</button>
    )
  }
  
}
