import React, { Component } from 'react'

interface Ex04{
    name : string;
}
interface St{

}
export default class Bai4 extends Component<St,Ex04> {
    constructor(props:Ex04) {
        super(props);
        this.state = { 
            name:"Học code để đi làm"
         }
    }
    handleChange =() => {
        this.setState({
            name:"Học code để làm cái gì đó"
        })
    }
    shouldComponentUpdate(nextProps: Readonly<St>, nextState: Readonly<Ex04>, nextContext: any): boolean {
        console.log("Ko đổi slogan");
        
        return false
    }
  render() {
    return (
      <div>
        <b>Company: {this.state.name}</b><br />
        <button onClick={this.handleChange}>Slogan</button>
      </div>
    )
  }
}