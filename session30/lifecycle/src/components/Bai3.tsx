import React, { Component } from 'react'

interface Ex03{
    name : string;
}
interface St{

}
export default class Bai3 extends Component<St,Ex03> {
    constructor(props:Ex03) {
        super(props);
        this.state = { 
            name:"Rikkei Academy"
         }
    }
    handleChange =() => {
        this.setState({
            name:"RikkeiSoft"
        })
    }
  render() {
    return (
      <div>
        <b>Company: {this.state.name}</b><br />
        <button onClick={this.handleChange}>Change state</button>
      </div>
    )
  }
}