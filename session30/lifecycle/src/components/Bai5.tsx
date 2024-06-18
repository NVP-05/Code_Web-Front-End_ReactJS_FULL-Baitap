import React, { Component } from 'react'
interface Ex05{
    name : string;
    active : boolean;
}
interface St{

}

export default class Bai5 extends Component<St,Ex05> {
    constructor(props:Ex05){
        super(props);
        this.state = { 
            name:"Open the form",
            active: false
         }
    }
    handleChange = () => {
        this.setState({
            name:"Close the form",
            active:!this.state.active
        })
    }
  render() {
    return (
      <div>
        <p>Status: "{this.state.active ? <b>Open the form</b> : <b>Close the form</b> }" </p>
        <button onClick={this.handleChange}>Change props</button>
      </div>
    )
  }
}
